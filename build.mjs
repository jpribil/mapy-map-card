import * as esbuild from "esbuild";

const isWatch = process.argv.includes("--watch");

const options = {
  entryPoints: ["src/main.ts"],
  bundle: true,
  minify: true,
  format: "iife",
  target: "es2020",
  outfile: "dist/mapy-map-card.js",
  sourcemap: false,
  legalComments: "inline",
  loader: { ".css": "text" },
  define: { "process.env.NODE_ENV": '"production"' },
};

if (isWatch) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  console.log("watching for changes...");
} else {
  await esbuild.build(options);
  console.log("built dist/mapy-map-card.js");
}
