import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig(async () => {
  const tailwindcss = await import("tailwindcss");
  const autoprefixer = await import("autoprefixer");

  return {
    plugins: [react(), svgr()],
    css: {
      postcss: {
        plugins: [tailwindcss.default, autoprefixer.default],
      },
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, "./src/components"),
        assets: path.resolve(__dirname, "./src/assets"),
        pages: path.resolve(__dirname, "./src/pages"),
        stores: path.resolve(__dirname, "./src/stores"),
        styles: path.resolve(__dirname, "./src/styles"),
        types: path.resolve(__dirname, "./src/types"),
        utils: path.resolve(__dirname, "./src/utils"),
        constans: path.resolve(__dirname, "./src/constans"),
        hooks: path.resolve(__dirname, "./src/hooks"),
        paths: path.resolve(__dirname, "./src/paths"),
      },
    },
  };
});
