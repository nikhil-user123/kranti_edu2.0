/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["apimatic.io","aakarsh1437.s3.ap-south-1.amazonaws.com"],
    // domains:["aakarsh1437.s3.ap-south-1.amazonaws.com"],
  },
}

module.exports = nextConfig
