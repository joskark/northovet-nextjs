/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // npm run dev doesn't work with this enabled
  images: {
    unoptimized: true, // S3 doesn’t have server-side processing capabilities. This one disables next/Image processing which needs server-side capabilities
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thanasis-website.s3.eu-west-1.amazonaws.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
