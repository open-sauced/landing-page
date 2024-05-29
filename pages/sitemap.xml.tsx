import { GetServerSideProps } from 'next';
import { client as sanityClient } from '../lib/sanity';

function generateSiteMap(posts: any[]) {

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Example static URLs -->
     <url>
       <loc>https://opensauced.pizza</loc>
     </url>
     <url>
       <loc>https://opensauced.pizza/about</loc>
     </url>
     ${posts
       .map(({ slug }) => {
         return `
       <url>
           <loc>https://opensauced.pizza/blog/${slug.current}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
  console.log("Generated sitemap:", sitemap);  // Log the generated sitemap
  return sitemap;
}

function SiteMap() {
  // getServerSideProps will handle the logic
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {

  // Fetch data from Sanity
  const query = `*[_type == "blog"]{ _id, title, slug }`;

  try {
    const posts = await sanityClient.fetch(query);

    // Generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(posts);

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
      props: {},
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.statusCode = 500;
    res.end("Internal Server Error");

    return {
      props: {},
    };
  }
};

export default SiteMap;
