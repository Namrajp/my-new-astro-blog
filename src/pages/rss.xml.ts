import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { SITE } from "../config";

export async function GET(context: APIContext) {
  const blog = await getCollection("posts");
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: SITE.url,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
    })),
  });
}
