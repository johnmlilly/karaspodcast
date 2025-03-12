import { DateTime } from "luxon";
import metagen from "eleventy-plugin-metagen";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function(eleventyConfig) {
    
  eleventyConfig.addPassthroughCopy('./src/styles');
  eleventyConfig.addPassthroughCopy('./src/fonts/font.woff');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/scripts');
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy("./src/robots.txt");

  // Watch images for the image pipeline.
  eleventyConfig.addWatchTarget("./src/assets/**/*.{svg,webp,png,jpg,jpeg,gif}");
  eleventyConfig.addWatchTarget("./src/styles");
  eleventyConfig.addWatchTarget("./src/scripts");
  
  // Social Media Meta Data
  eleventyConfig.addPlugin(metagen);
    
  //Eleventy Image Plugin
  // Image optimization: https://www.11ty.dev/docs/plugins/image/#eleventy-transform
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // Output formats for each image.
    formats: ["webp", "auto"],

    // widths: ["auto"],

    failOnError: false,
    htmlOptions: {
      imgAttributes: {
        // e.g. <img loading decoding> assigned on the HTML tag will override these values.
        loading: "lazy",
        decoding: "async",
      }
    },

    sharpOptions: {
      animated: true,
    },
	});

    // Get current year for footer
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

   // Format blog date into readable format
  eleventyConfig.addFilter("postDate", (date) => {
    // Handle both Date objects and ISO strings (e.g., "2025-02-26")
    if (date instanceof Date) {
      return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED);
    } else if (typeof date === "string") {
      return DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED);
    }
    return "Invalid Date"; // Fallback for invalid input
  });
  
  // Filter to exclude episodes with the "intro" tag
  eleventyConfig.addFilter('excludeIntroByTag', (collection, introTag = "intro") => {
    return collection.filter(episode => !episode.data.tags || !episode.data.tags.includes(introTag));
  });

  // Filter to show only episodes with the "intro" tag
  eleventyConfig.addFilter('onlyIntroByTag', (collection, introTag = "intro") => {
    return collection.filter(episode => episode.data.tags && episode.data.tags.includes(introTag));
  });

  // Filter to pad numbers with leading zeros (e.g., 1 → 01, 10 → 10)
  eleventyConfig.addFilter("padEpisodeNumber", (number) => {
    return number < 10 ? `0${number}` : number;
  });

    // Per-page bundles, see https://github.com/11ty/eleventy-plugin-bundle
	// Adds the {% css %} paired shortcode
	eleventyConfig.addBundle("css", {
		toFileDirectory: "dist",
	});
	// Adds the {% js %} paired shortcode
	eleventyConfig.addBundle("js", {
		toFileDirectory: "dist",
  });
  
  eleventyConfig.addTemplateFormats("njk");
  eleventyConfig.addTemplateFormats("html");

    // Output folders
    return {
      dir: {
        input: "src",    // Source directory for your content
        output: "public" // Directory where the built files will be output
      }
    };
};