"use client";

import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error }) {
  useEffect(() => {
    // Log error to console for debugging
    console.error('Global error occurred:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Something went wrong!</h2>
          <p>We apologize for the inconvenience. Please try refreshing the page.</p>
        </div>
      </body>
    </html>
  );
}
