import { defineConfig } from "vite";
import { pluginExposeRenderer } from "./vite.base.config.mjs";
import vue from "@vitejs/plugin-vue";
import { svgBuilder } from "./src/plugins/svgBuilder";
import { resolve } from "path";

const pathResolve = (dir) => resolve(__dirname, dir);

// https://vitejs.dev/config
export default defineConfig((env) => {
  /** @type {import('vite').ConfigEnv<'renderer'>} */
  const forgeEnv = env;
  const { root, mode, forgeConfigSelf } = forgeEnv;
  const name = forgeConfigSelf.name ?? "";

  /** @type {import('vite').UserCoynfig} */
  return {
    root,
    mode,
    base: "./",
    build: {
      outDir: `.vite/renderer/${name}`,
    },
    plugins: [
      pluginExposeRenderer(name),
      vue(),
      svgBuilder("./src/assets/svg-icons/icons/"),
      svgBuilder("./src/assets/svg-icons/weather-icons/"),
    ],
    resolve: {
      preserveSymlinks: true,
      alias: {
        "@": pathResolve("./src"),
      },
    },
    clearScreen: false,
    server: {
      proxy: {
        "/v7/weather": {
          target: "https://devapi.qweather.com",
          changeOrigin: true,
        },
        "/v7/warning": {
          target: "https://devapi.qweather.com",
          changeOrigin: true,
        },
        "/v2/city": {
          target: "https://geoapi.qweather.com",
          changeOrigin: true,
        },
      },
    },
  };
});
