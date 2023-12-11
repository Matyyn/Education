import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    plugins: [react()],
    optimizeDeps: {
      esbuildOptions: {
        plugins: [esbuildCommonjs(["react-moment"])],
      },
    },
    resolve: {
      mainFields: [],
    },
  };
});
