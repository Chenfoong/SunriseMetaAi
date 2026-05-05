# Sunrise Education Landing Website

Welcome to the Sunrise Education Landing Website! This repository contains the source code and all necessary instructions to set up, customize and deploy the Sunrise Education landing page.

## Table of Contents
- [Setup Instructions](#setup-instructions)
- [Feature Documentation](#feature-documentation)
- [Deployment Guides](#deployment-guides)
  - [GitHub Pages](#github-pages)
  - [Netlify](#netlify)
- [Customization Tips](#customization-tips)

## Setup Instructions
To get started with the Sunrise Education landing website, follow these instructions:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Chenfoong/SunriseMetaAi.git
   cd SunriseMetaAi
   ```
2. **Install Dependencies**
   Make sure you have Node.js and npm installed on your machine. Then, run:
   ```bash
   npm install
   ```
3. **Start Development Server**
   To run the project locally, you can use:
   ```bash
   npm start
   ```
   Then navigate to `http://localhost:3000` in your browser.

## Feature Documentation
- **Responsive Design**: The landing page is designed to be fully responsive on all devices.
- **Interactive Elements**: Features interactive sections that engage users and provide valuable information.
- **SEO Optimized**: Built with SEO best practices to enhance visibility on search engines.

## Deployment Guides
### GitHub Pages
1. **Build the Project**
   Run the following command to create a production build:
   ```bash
   npm run build
   ```
2. **Deploy to GitHub Pages**
   You can use the gh-pages package to deploy:
   ```bash
   npm install --save gh-pages
   ```
   Add the following scripts to your `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
   Run:
   ```bash
   npm run deploy
   ```

### Netlify
1. **Create a Netlify Account** if you haven’t already.
2. **Link Your GitHub Repository**
3. **Deploy Site**: Choose to deploy the main branch and ensure the build commands are set:
   * Build Command: `npm run build`
   * Publish Directory: `build`

## Customization Tips
- **Editing Content**: Update content in the `src/components` folder to customize text and images.
- **Styling Options**: Modify styles in `src/styles` to change the appearance of the site.
- **Adding New Features**: Follow component standards while adding new sections or interactive features.

## Conclusion
The Sunrise Education landing website is built to be easily customizable and deployable on various platforms. With this README as a guide, you should be well equipped to get started!