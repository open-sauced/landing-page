import { NextApiRequest, NextApiResponse } from 'next'
import RSS from 'rss';
import { getAllBlogs } from '../../../lib/sanity';
import { Author as SanityAuthor, Blog as SanityBlog } from '../../../sanity.types';

const site_url = 'https://opensauced.pizza';

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
  ) {
    try {
      const blogs = await getAllBlogs();
     
      const feedOptions = {
        title: 'OpenSauced Blog',
        description: 'Welcome to OpenSauced blog!',
        site_url: site_url,
        feed_url: `${site_url}/api/rss/blog`,
        image_url: `${site_url}/rss/logo.png`,
        pubDate: new Date(),
        copyright: `All rights reserved ${new Date().getFullYear()}, OpenSauced`,
      };
      
      const feed = new RSS(feedOptions);
    
      blogs.map((post: Omit<SanityBlog, "author"> & { author: SanityAuthor }) => {
        feed.item({
          title: post.title as string,
          description: post.summary as string,
          url: `${site_url}/blog/${post.slug?.current}`,
          date: post._createdAt,
          author: post.author.name
        });
      });

      res.setHeader('Content-Type', 'text/xml');
      res.status(200).send(feed.xml({ indent: true }));
      
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
}
