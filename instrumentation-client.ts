// This file configures the initialization of Sentry on the browser/client side.

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  replaysOnErrorSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // Integrations for additional features
  integrations: [
    Sentry.replayIntegration({
      // Additional Replay configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
    Sentry.feedbackIntegration({
      // Match your project's color scheme
      colorScheme: "dark",
      
      // Custom styling to match your project
      themeLight: {
        background: "#ffffff",
        backgroundHover: "#f8fafc",
        foreground: "#2d3748",
        border: "#e2e8f0",
        purple: "#CBACF9",
      },
      themeDark: {
        background: "#161a31", // Matches your black-gradient
        backgroundHover: "#1a1f3a",
        foreground: "#ffffff",
        border: "rgba(255, 255, 255, 0.125)", // Matches your black-300
        purple: "#CBACF9", // Your project's purple
        submitBackground: "#CBACF9",
        submitBackgroundHover: "#b794f6",
        submitForeground: "#000319",
        cancelBackground: "transparent",
        cancelBackgroundHover: "rgba(203, 172, 249, 0.1)",
        cancelForeground: "#CBACF9",
        cancelBorder: "#CBACF9",
      },

      // Animation and interaction settings
      showBranding: false,
      autoInject: true,
      
      // Custom button styling with animations
      buttonLabel: "Report a Bug",
      
      // Form configuration
      formTitle: "Report a Bug",
      nameLabel: "Name",
      namePlaceholder: "Your Name",
      emailLabel: "Email", 
      emailPlaceholder: "your.email@example.org",
      messageLabel: "Description (required)",
      messagePlaceholder: "What's the bug? What did you expect?",
      submitButtonLabel: "Send Bug Report",
      cancelButtonLabel: "Cancel",
      
      // Success message
      successMessageText: "Thank you for your report!",
    }),
  ],
});

// Export the router transition hook for navigation instrumentation
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart; 