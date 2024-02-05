import { NextApiRequest, NextApiResponse } from 'next'
import RSS from 'rss';
import { getAllChangelog } from "../../../lib/sanity";

const site_url = 'https://opensauced.pizza';

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
  ) {
    try {
      const changelogs = await getAllChangelog();
     
      const feedOptions = {
        title: 'OpenSauced Changelog',
        description: 'All the changes for OpenSauced!',
        site_url: site_url,
        feed_url: `${site_url}/api/rss/blog`,
        image_url: `${site_url}/rss/logo.png`,
        pubDate: new Date(),
        copyright: `All rights reserved ${new Date().getFullYear()}, OpenSauced`,
      };
      
      const feed = new RSS(feedOptions);
    
      changelogs.map((log) => {
        feed.item({
          title: log.title as string,
          description: log.summary as string,
          url: `${site_url}/blog/${log.slug?.current}`,
          date: log._createdAt,
        });
      });

      res.setHeader('Content-Type', 'text/xml');
      res.status(200).send(feed.xml({ indent: true }));
      
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
}