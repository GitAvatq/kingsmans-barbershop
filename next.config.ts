import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
     remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "t4.ftcdn.net", port: "", pathname: "/**" },
      { protocol: "https", hostname: "rafaelsbarbershop.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "i.pinimg.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "www.moderngentlemanmagazine.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "oldboybarbershop.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "i.mdel.net", port: "", pathname: "/**" },
      { protocol: "https", hostname: "image-cdn.flowgpt.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "i1.sndcdn.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "blog.clover.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "uppercutdeluxe.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "imageio.forbes.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "www.bercutbarbershop.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "mrcolt.ua", port: "", pathname: "/**" },
      { protocol: "https", hostname: "www.onthisday.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "parkerbarber.com", port: "", pathname: "/**" },
    ],
  },
};

export default nextConfig;
