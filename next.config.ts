/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: '/DevFarhad'
 // output: "export", // enables `next export` for static HTML export
 // basePath: isGithubPages ? "/DevFarhad" : "",
 // assetPrefix: isGithubPages ? "/DevFarhad/" : "",
 // images: {
 //   unoptimized: true, // required for static export to support <Image />
 // },
 // trailingSlash: true, // optional but improves static hosting compatibility
};

module.exports = nextConfig;