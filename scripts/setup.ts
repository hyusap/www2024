#!/usr/bin/env bun
import { $ } from "bun";
import { existsSync, readFileSync } from "fs";
import { join } from "path";

console.log("🚀 Setting up www2024 workspace...");

// Install dependencies
console.log("📦 Installing dependencies with Bun...");
await $`bun install`;

// Get root path from environment
const rootPath = process.env.CONDUCTOR_ROOT_PATH;
if (!rootPath) {
  console.error("❌ Error: CONDUCTOR_ROOT_PATH environment variable not set");
  process.exit(1);
}

// Copy .env from root if it exists
const envLocalRoot = join(rootPath, ".env.local");
const envRoot = join(rootPath, ".env");
const envLocalTarget = ".env.local";

if (existsSync(envLocalRoot)) {
  console.log("🔐 Copying .env.local from root repository...");
  await $`cp ${envLocalRoot} ${envLocalTarget}`;
} else if (existsSync(envRoot)) {
  console.log("🔐 Copying .env from root repository...");
  await $`cp ${envRoot} ${envLocalTarget}`;
} else {
  console.log("⚠️  Warning: No .env or .env.local found in root.");
  console.log("ℹ️  This Next.js project may have optional environment variables.");
  console.log("   If you need API keys or environment variables, create .env.local manually.");
}

// Check if .env.local exists and validate any critical variables if needed
if (existsSync(envLocalTarget)) {
  const envContent = readFileSync(envLocalTarget, "utf-8");

  // Check for Vercel KV if using it
  const hasVercelKV = envContent.includes("KV_REST_API_URL") &&
                      envContent.includes("KV_REST_API_TOKEN");

  // Check for Todoist API if using it
  const hasTodoistAPI = envContent.includes("TODOIST_API_TOKEN");

  if (!hasVercelKV && !hasTodoistAPI) {
    console.log("ℹ️  No API keys detected in .env.local");
    console.log("   The app may require:");
    console.log("   - TODOIST_API_TOKEN (for Todoist integration)");
    console.log("   - KV_REST_API_URL and KV_REST_API_TOKEN (for Vercel KV)");
  }
} else {
  console.log("ℹ️  No .env.local file present. The app will run with default configuration.");
}

console.log("✅ Workspace setup complete!");
console.log("🎯 Run 'bun dev' to start the development server");
