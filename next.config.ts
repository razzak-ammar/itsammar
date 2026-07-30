import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The presentation lives outside /public so it can only be served by the
  // password-protected route. Include it in the server function deployment.
  outputFileTracingIncludes: {
    "/presentation/download": ["./presentation-assets/final-hrv_jul_29_26.pptx"],
    "/link/*": ["./data/links.json"],
  },
};

export default nextConfig;
