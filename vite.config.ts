import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 3000, // or your preferred port
    strictPort: true,
    allowedHosts: [
      "fe-cloudpix-h6fphjc3cdgqgbbq.southeastasia-01.azurewebsites.net",
      "localhost",
    ],
  },
});
