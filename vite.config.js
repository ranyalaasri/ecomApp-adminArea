import path from "path";

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default ({ mode }) => {
  // Load environment variables
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // Determine the proxy URL based on environment variables
  const proxy_url =
    process.env.VITE_DEV_REMOTE === "remote"
      ? process.env.VITE_BACKEND_SERVER
      : "http://localhost:7500/";

  // Define Vite configuration
  const config = {
    plugins: [react()], // Use the React plugin
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"), // Define aliases for paths
      },
    },
    server: {
      port: 3000, // Specify the development server port
      proxy: {
        "/api": {
          target: proxy_url, // Proxy requests to the specified URL
          changeOrigin: true, // Change the origin of the host header to the target URL
          // secure: false, // Set this to false if your backend server doesn't have a valid SSL certificate
        },
      },
    },
  };

  // Define and return the Vite configuration
  return defineConfig(config);
};
