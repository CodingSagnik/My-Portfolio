import * as Sentry from '@sentry/nextjs';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sagnik's Portfolio",
  description: "Modern & Minimalist JS Mastery Portfolio",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    "sentry-trace": "{{sentry-trace}}",
    "baggage": "{{baggage}}",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Simplified Sentry styling with proper error handling
              function applySentryStyles() {
                try {
                  // Remove existing styles to prevent duplicates
                  const existingStyle = document.getElementById('sentry-custom-styles');
                  if (existingStyle) existingStyle.remove();
                  
                  const style = document.createElement('style');
                  style.id = 'sentry-custom-styles';
                  style.innerHTML = \`
                    /* Sentry Input Styling */
                    div[role="dialog"] input,
                    div[aria-modal="true"] input,
                    form input,
                    [class*="feedback"] input,
                    div[role="dialog"] textarea,
                    div[aria-modal="true"] textarea,
                    form textarea,
                    [class*="feedback"] textarea {
                      background: rgba(6, 9, 31, 0.6) !important;
                      border: 3px solid #CBACF9 !important;
                      border-radius: 8px !important;
                      color: #ffffff !important;
                      padding: 12px 16px !important;
                      box-shadow: inset 0 0 0 3px #CBACF9, 0 0 0 3px #CBACF9 !important;
                    }
                    
                    /* Sentry Button and Link Styling */
                    div[role="dialog"] button:not([type="submit"]),
                    div[aria-modal="true"] button:not([type="submit"]),
                    form button:not([type="submit"]),
                    [class*="feedback"] button:not([type="submit"]),
                    div[role="dialog"] a,
                    div[aria-modal="true"] a,
                    form a,
                    [class*="feedback"] a {
                      background: transparent !important;
                      border: 2px solid #CBACF9 !important;
                      color: #CBACF9 !important;
                      padding: 8px 12px !important;
                      border-radius: 6px !important;
                      text-decoration: none !important;
                    }
                    
                    /* All text color */
                    div[role="dialog"] *,
                    div[aria-modal="true"] *,
                    form *,
                    [class*="feedback"] * {
                      color: #CBACF9 !important;
                    }
                  \`;
                  
                  document.head.appendChild(style);
                  
                  // Direct style application with error handling
                  setTimeout(() => {
                    try {
                      // Style inputs directly
                      const inputs = document.querySelectorAll('div[role="dialog"] input, div[aria-modal="true"] input, form input, [class*="feedback"] input, div[role="dialog"] textarea, div[aria-modal="true"] textarea, form textarea, [class*="feedback"] textarea');
                      inputs.forEach(input => {
                        try {
                          input.style.setProperty('background', 'rgba(6, 9, 31, 0.6)', 'important');
                          input.style.setProperty('border', '3px solid #CBACF9', 'important');
                          input.style.setProperty('border-radius', '8px', 'important');
                          input.style.setProperty('color', '#ffffff', 'important');
                          input.style.setProperty('box-shadow', 'inset 0 0 0 3px #CBACF9, 0 0 0 3px #CBACF9', 'important');
                        } catch (e) {
                          // Silently handle styling errors
                        }
                      });
                      
                      // Style buttons and links
                      const buttons = document.querySelectorAll('div[role="dialog"] button:not([type="submit"]), div[aria-modal="true"] button:not([type="submit"]), form button:not([type="submit"]), [class*="feedback"] button:not([type="submit"]), div[role="dialog"] a, div[aria-modal="true"] a, form a, [class*="feedback"] a');
                      buttons.forEach(button => {
                        try {
                          button.style.setProperty('background', 'transparent', 'important');
                          button.style.setProperty('border', '2px solid #CBACF9', 'important');
                          button.style.setProperty('color', '#CBACF9', 'important');
                          button.style.setProperty('border-radius', '6px', 'important');
                          button.style.setProperty('padding', '8px 12px', 'important');
                        } catch (e) {
                          // Silently handle styling errors
                        }
                      });
                      
                      // Style all text
                      const allText = document.querySelectorAll('div[role="dialog"] *, div[aria-modal="true"] *, form *, [class*="feedback"] *');
                      allText.forEach(el => {
                        try {
                          if (el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' && el.tagName !== 'BUTTON') {
                            el.style.setProperty('color', '#CBACF9', 'important');
                          }
                        } catch (e) {
                          // Silently handle styling errors
                        }
                      });
                    } catch (e) {
                      // Silently handle direct styling errors
                    }
                  }, 200);
                } catch (e) {
                  // Silently handle main function errors
                }
              }
              
              // Safe initialization function
              function initializeSentryStyles() {
                // Apply styles when DOM is ready
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', () => {
                    applySentryStyles();
                    setupMonitoring();
                  });
                } else {
                  applySentryStyles();
                  setupMonitoring();
                }
              }
              
              // Setup monitoring only after DOM is ready
              function setupMonitoring() {
                try {
                  // Monitor for Sentry elements with error handling
                  let styleInterval;
                  const startMonitoring = () => {
                    try {
                      if (styleInterval) clearInterval(styleInterval);
                      styleInterval = setInterval(() => {
                        try {
                          const sentryElements = document.querySelectorAll('div[role="dialog"], div[aria-modal="true"], [class*="feedback"]');
                          if (sentryElements.length > 0) {
                            applySentryStyles();
                          }
                        } catch (e) {
                          // Silently handle monitoring errors
                        }
                      }, 1000);
                    } catch (e) {
                      // Silently handle monitoring setup errors
                    }
                  };
                  
                  startMonitoring();
                  
                  // MutationObserver with proper DOM checking
                  if (document.body && typeof MutationObserver !== 'undefined') {
                    try {
                      const observer = new MutationObserver((mutations) => {
                        try {
                          let shouldApply = false;
                          mutations.forEach(mutation => {
                            if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                              mutation.addedNodes.forEach(node => {
                                if (node.nodeType === 1) {
                                  const element = node;
                                  if (element.getAttribute) {
                                    const role = element.getAttribute('role');
                                    const ariaModal = element.getAttribute('aria-modal');
                                    const className = element.className;
                                    
                                    if (role === 'dialog' || 
                                        ariaModal === 'true' || 
                                        (className && typeof className === 'string' && className.includes('feedback'))) {
                                      shouldApply = true;
                                    }
                                  }
                                }
                              });
                            }
                          });
                          if (shouldApply) {
                            setTimeout(applySentryStyles, 100);
                          }
                        } catch (e) {
                          // Silently handle mutation observer errors
                        }
                      });
                      
                      observer.observe(document.body, {
                        childList: true,
                        subtree: true
                      });
                    } catch (e) {
                      // Silently handle observer setup errors
                    }
                  } else {
                    // Fallback: retry setting up observer after a delay
                    setTimeout(() => {
                      if (document.body) {
                        setupMonitoring();
                      }
                    }, 500);
                  }
                } catch (e) {
                  // Silently handle setup errors
                }
              }
              
              // Initialize everything
              initializeSentryStyles();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
