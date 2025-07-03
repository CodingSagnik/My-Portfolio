import { NextRequest, NextResponse } from "next/server";
import * as Sentry from "@sentry/nextjs";

export const dynamic = "force-dynamic";

class SentryExampleServerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SentryExampleServerError";
  }
}

// A faulty API route to test Sentry's error monitoring
export async function GET(request: NextRequest) {
  return Sentry.withServerActionInstrumentation(
    "sentry-example-api",
    async () => {
      throw new SentryExampleServerError("This error is raised on the server of the example API route.");
    }
  );
}
