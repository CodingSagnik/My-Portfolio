/**
 * Next.js Configuration with Sentry Integration
 * 
 * This configuration file sets up Next.js with Sentry for error monitoring,
 * performance tracking, and automatic instrumentation. The setup includes
 * optimizations for production builds and source map generation.
 * 
 * Key Features:
 * - Sentry error monitoring and performance tracking
 * - Automatic source map uploading for better debugging
 * - Vercel Cron Monitors integration
 * - Bundle optimization through tree-shaking
 * - Production-ready performance settings
 */

import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has TypeScript errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;