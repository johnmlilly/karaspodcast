# Kara's Podcast

Kara's Podcast is a modern, mobile-friendly platform designed for hosting and managing podcast episodes. Built with [Eleventy](https://www.11ty.dev/), it uses [Decap CMS](https://decapcms.org/) for seamless content management and delivers a clean, user-focused experience. The template for this repository is taken from Kevin Powell's [JAMStack Blog Starter](https://github.com/kevin-powell/JAMStack-blog-starter).

## Purpose
The platform aims to provide an accessible and engaging way for listeners to enjoy podcasts, especially on mobile devices, while offering content creators a simple system to upload and manage episodes.

## Features
- Mobile-friendly design optimized for smartphones and tablets
- Trending episodes section to showcase popular content
- Easy-to-use audio playback with controls and progress tracking
- Content management through Decap CMS
- Support for custom episode artwork and metadata

## Technology Stack
- **[Eleventy](https://www.11ty.dev/)**: Static site generator for fast, lightweight builds
- **[Decap CMS](https://decapcms.org/)**: Open-source CMS for managing podcast content
- **[Netlify](https://www.netlify.com/)**: Hosting and deployment platform with CDN, Image CDN, and Auth0 integration
- **HTML, CSS, JavaScript**: Core frontend technologies

## Getting Started
To run the project locally:
1. Clone the repo:
   ```bash
   git clone https://github.com/johnmlilly/karaspodcast.git
   cd karaspodcast
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Visit `http://localhost:8080` in your browser (or the port specified in the config).

## Usage
Manage podcast episodes via the Decap CMS interface. Add new episodes, upload audio files, and edit metadata directly from the CMS. The site is hosted on Netlify, leveraging its CDN for fast performance, Image CDN for optimized images, and Auth0 for user management.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.