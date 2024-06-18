import { defineConfig } from "vite";
import { pluginExposeRenderer } from "./vite.base.config.mjs";
import vue from "@vitejs/plugin-vue";
import { svgBuilder } from "./src/plugins/svgBuilder";

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
    ],
    resolve: {
      preserveSymlinks: true,
    },
    clearScreen: false,
  };
});
