import { DateTime } from "luxon";
import metagen from "eleventy-plugin-metagen";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy('./src/styles');
    eleventyConfig.addPassthroughCopy('./src/assets') ;
    eleventyConfig.addPassthroughCopy('./src/scripts');
    eleventyConfig.addPassthroughCopy('./src/admin');
    // Social Media Meta Data
    eleventyConfig.addPlugin(metagen);
    //Eleventy Image Plugin
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);

    // Get current year for footer
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    // Format blog date into readable format
    eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });
    
    // Output folders
    return {
      dir: {
        input: "src",    // Source directory for your content
        output: "public" // Directory where the built files will be output
      }
    };
};