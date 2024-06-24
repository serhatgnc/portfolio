import { withSentryConfig } from "@sentry/nextjs";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.dev.to",
        port: "",
      },
    ],
  },
};

export default withSentryConfig(nextConfig, {
  org: "serhat-gb",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
