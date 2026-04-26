import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',    
  images: {
    unoptimized: true,   
  },
 
  basePath: '/Juhyung_home', 
};

export default nextConfig;