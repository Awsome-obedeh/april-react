/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ng.jumia.is',
       

        
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
       

        
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
       

        
      },
      {
        protocol: 'https',
        hostname: 'i.imgflip.com',
       

        
      },
    ],
  },
};

export default nextConfig;
