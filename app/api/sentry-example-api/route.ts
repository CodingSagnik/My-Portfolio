import { NextRequest } from "next/server";

/**
 * A sample API route to demonstrate Sentry error monitoring.
 * This endpoint can be used to test error tracking in your deployed application.
 */
export async function GET(_request: NextRequest) {
  throw new Error("Sentry Example API Route Error");
}
