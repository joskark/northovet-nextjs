/** @type {import('next').NextConfig} */
const nextConfig = {
  /*
  "trailingSlash" is needed with Cloudfront and S3 origin. CLoudfront is trying
  to access the object directly in s3 but the file is saved as <name>.html
  Since Cloudfront is trying to find the index.html object this solving the issue.
  https://nextjs.org/docs/pages/api-reference/config/next-config-js/trailingSlash
  */
  trailingSlash: true,
  output: "export",
  basePath: "/northovet-nextjs",
  images: {
    unoptimized: true, // S3 doesn’t have server-side processing capabilities. This one disables next/Image processing which needs server-side capabilities
    remotePatterns: [
      {
        protocol: "https",
        hostname: "northovet-assets.s3.eu-west-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
