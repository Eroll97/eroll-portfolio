
import fs from "node:fs/promises";
import path from "node:path";

const dataFile = path.join(process.cwd(), "lib", "data.js");

const source = await fs.readFile(dataFile, "utf8");

const pattern =
  /https\\?:\/\/shaheer-portfolio-theta\.vercel\.app\/(?:icons|shots|blog)\/[\w.-]+/g;

const urls = [...new Set(source.match(pattern) || [])];

if (urls.length === 0) {
  console.log("No matching external image URLs found.");
  process.exit(0);
}

let updated = source;
let migrated = 0;
const failed = [];

console.log(`Found ${urls.length} images to migrate.`);

for (const original of urls) {
  const remoteUrl = original.replace("https\\:", "https:");
  const assetPath = new URL(remoteUrl).pathname;

  try {
    const response = await fetch(remoteUrl, {
      signal: AbortSignal.timeout(20000),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const contentType =
      response.headers.get("content-type") || "";

    if (!contentType.startsWith("image/")) {
      throw new Error("Response is not an image");
    }

    const destination = path.join(
      process.cwd(),
      "public",
      assetPath.slice(1)
    );

    await fs.mkdir(path.dirname(destination), {
      recursive: true,
    });

    await fs.writeFile(
      destination,
      Buffer.from(await response.arrayBuffer())
    );

    updated = updated.split(original).join(assetPath);
    migrated++;

    console.log(`Saved: ${assetPath}`);
  } catch (error) {
    failed.push(remoteUrl);
    console.log(`Could not migrate: ${remoteUrl}`);
  }
}

await fs.writeFile(dataFile, updated, "utf8");

console.log(`\nMigrated ${migrated} of ${urls.length} images.`);

if (failed.length > 0) {
  console.log("\nThese images need manual attention:");
  failed.forEach((url) => console.log(url));
} else {
  console.log("All matching images migrated successfully!");
}
