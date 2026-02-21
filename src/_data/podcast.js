import EleventyFetch from "@11ty/eleventy-fetch";
import { XMLParser } from "fast-xml-parser";

export default async function () {
  const rssUrl =
    "https://api.substack.com/feed/podcast/7074658.rss";

  // Cache for 1 hour
  const xml = await EleventyFetch(rssUrl, {
    duration: "1h",
    type: "xml",
  });

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "",
  });

  const feed = parser.parse(xml);

  const items = feed.rss.channel.item;

    const total = items.length;

    return items.map((item, index) => ({
        title: item.title,
        url: item.link,
        description: item.description,
        image:
            item["itunes:image"]?.href ||
            null,
        pubDate: item.pubDate,
        episodeNumber: total - index,
    }));
};