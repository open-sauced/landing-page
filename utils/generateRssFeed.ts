import { getAllBlogs } from '../lib/sanity';
import RSS from 'rss';
import fs from 'fs';

export default async function generateRssFeed() {
 const site_url = 'https://opensauced.pizza';
 const blogs = await getAllBlogs();
 
 const feedOptions = {
   title: 'OpenSauced Blog',
   description: 'Welcome to OpenSauced blog!',
   site_url: site_url,
   feed_url: `${site_url}/rss/blog/feed.xml`,
   image_url: `${site_url}/rss/logo.png`,
   pubDate: new Date(),
   copyright: `All rights reserved ${new Date().getFullYear()}, OpenSauced`,
  };
  
  const feed = new RSS(feedOptions);

  blogs.map((post) => {
    feed.item({
      title: post.title as string,
      description: post.summary as string,
      url: `${site_url}/blog/${post.slug?.current}`,
      date: post._createdAt,
      author: post.author,
      
    });
  });

  fs.writeFileSync('./public/rss/blog/feed.xml', feed.xml({ indent: true }));
}