// vite.config.ts
import path from "path";
import { defineConfig } from "file:///C:/Users/aleks/Desktop/Moreon/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/aleks/Desktop/Moreon/node_modules/@vitejs/plugin-react-swc/index.mjs";
import svgr from "file:///C:/Users/aleks/Desktop/Moreon/node_modules/vite-plugin-svgr/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\aleks\\Desktop\\Moreon";
var vite_config_default = defineConfig(async () => {
  const tailwindcss = await import(
    "file:///C:/Users/aleks/Desktop/Moreon/node_modules/tailwindcss/lib/index.js"
  );
  const autoprefixer = await import(
    "file:///C:/Users/aleks/Desktop/Moreon/node_modules/autoprefixer/lib/autoprefixer.js"
  );
  return {
    plugins: [react(), svgr()],
    css: {
      postcss: {
        plugins: [tailwindcss.default, autoprefixer.default],
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src"),
        components: path.resolve(
          __vite_injected_original_dirname,
          "./src/components",
        ),
        assets: path.resolve(__vite_injected_original_dirname, "./src/assets"),
        pages: path.resolve(__vite_injected_original_dirname, "./src/pages"),
        stores: path.resolve(__vite_injected_original_dirname, "./src/stores"),
        styles: path.resolve(__vite_injected_original_dirname, "./src/styles"),
        types: path.resolve(__vite_injected_original_dirname, "./src/types"),
        utils: path.resolve(__vite_injected_original_dirname, "./src/utils"),
        constans: path.resolve(
          __vite_injected_original_dirname,
          "./src/constans",
        ),
        hooks: path.resolve(__vite_injected_original_dirname, "./src/hooks"),
        paths: path.resolve(__vite_injected_original_dirname, "./src/paths"),
        schema: path.resolve(__vite_injected_original_dirname, "./src/schema"),
      },
    },
  };
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhbGVrc1xcXFxEZXNrdG9wXFxcXE1vcmVvblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYWxla3NcXFxcRGVza3RvcFxcXFxNb3Jlb25cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2FsZWtzL0Rlc2t0b3AvTW9yZW9uL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XHJcbmltcG9ydCBzdmdyIGZyb20gXCJ2aXRlLXBsdWdpbi1zdmdyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHRhaWx3aW5kY3NzID0gYXdhaXQgaW1wb3J0KFwidGFpbHdpbmRjc3NcIik7XHJcbiAgY29uc3QgYXV0b3ByZWZpeGVyID0gYXdhaXQgaW1wb3J0KFwiYXV0b3ByZWZpeGVyXCIpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGx1Z2luczogW3JlYWN0KCksIHN2Z3IoKV0sXHJcbiAgICBjc3M6IHtcclxuICAgICAgcG9zdGNzczoge1xyXG4gICAgICAgIHBsdWdpbnM6IFt0YWlsd2luZGNzcy5kZWZhdWx0LCBhdXRvcHJlZml4ZXIuZGVmYXVsdF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczoge1xyXG4gICAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvY29tcG9uZW50c1wiKSxcclxuICAgICAgICBhc3NldHM6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvYXNzZXRzXCIpLFxyXG4gICAgICAgIHBhZ2VzOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL3BhZ2VzXCIpLFxyXG4gICAgICAgIHN0b3JlczogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9zdG9yZXNcIiksXHJcbiAgICAgICAgc3R5bGVzOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL3N0eWxlc1wiKSxcclxuICAgICAgICB0eXBlczogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy90eXBlc1wiKSxcclxuICAgICAgICB1dGlsczogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy91dGlsc1wiKSxcclxuICAgICAgICBjb25zdGFuczogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9jb25zdGFuc1wiKSxcclxuICAgICAgICBob29rczogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9ob29rc1wiKSxcclxuICAgICAgICBwYXRoczogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9wYXRoc1wiKSxcclxuICAgICAgICBzY2hlbWE6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvc2NoZW1hXCIpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtUixPQUFPLFVBQVU7QUFFcFMsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUpqQixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWEsWUFBWTtBQUN0QyxRQUFNLGNBQWMsTUFBTSxPQUFPLDZFQUFhO0FBQzlDLFFBQU0sZUFBZSxNQUFNLE9BQU8scUZBQWM7QUFFaEQsU0FBTztBQUFBLElBQ0wsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFBQSxJQUN6QixLQUFLO0FBQUEsTUFDSCxTQUFTO0FBQUEsUUFDUCxTQUFTLENBQUMsWUFBWSxTQUFTLGFBQWEsT0FBTztBQUFBLE1BQ3JEO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLFFBQ3BDLFlBQVksS0FBSyxRQUFRLGtDQUFXLGtCQUFrQjtBQUFBLFFBQ3RELFFBQVEsS0FBSyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxRQUM5QyxPQUFPLEtBQUssUUFBUSxrQ0FBVyxhQUFhO0FBQUEsUUFDNUMsUUFBUSxLQUFLLFFBQVEsa0NBQVcsY0FBYztBQUFBLFFBQzlDLFFBQVEsS0FBSyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxRQUM5QyxPQUFPLEtBQUssUUFBUSxrQ0FBVyxhQUFhO0FBQUEsUUFDNUMsT0FBTyxLQUFLLFFBQVEsa0NBQVcsYUFBYTtBQUFBLFFBQzVDLFVBQVUsS0FBSyxRQUFRLGtDQUFXLGdCQUFnQjtBQUFBLFFBQ2xELE9BQU8sS0FBSyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxRQUM1QyxPQUFPLEtBQUssUUFBUSxrQ0FBVyxhQUFhO0FBQUEsUUFDNUMsUUFBUSxLQUFLLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ2hEO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
