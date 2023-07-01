import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "toca",
      formats: ["es", "umd"],
      fileName: "toca",
    },
    rollupOptions: {
      input: path.resolve(__dirname, "src/index.ts"),
      external: ["react", "react-dom"],
      output: {
        manualChunks: undefined,
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
