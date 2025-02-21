import { DateTime } from "luxon";
import metagen from "eleventy-plugin-metagen";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy('./src/styles');
    eleventyConfig.addPassthroughCopy('./src/assets') ;
    eleventyConfig.addPassthroughCopy('./src/scripts');
    eleventyConfig.addPassthroughCopy('./src/admin');

    // Watch images for the image pipeline.
    eleventyConfig.addWatchTarget("./src/assets/**/*.{svg,webp,png,jpg,jpeg,gif}");
    eleventyConfig.addWatchTarget("./src/styles");

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
    eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
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

    // Output folders
    return {
      dir: {
        input: "src",    // Source directory for your content
        output: "public" // Directory where the built files will be output
      }
    };
};