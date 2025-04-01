import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // define: {
  //   __APP_ENV__: JSON.stringify(env.APP_ENV),
  // },
});
// import { fileURLToPath, URL } from 'node:url'
// import { defineConfig, loadEnv } from 'vite'
// import vue from '@vitejs/plugin-vue'

// export default defineConfig(({ command, mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');

//   return {
//     plugins: [
//       vue(),
//     ],
//     define: {
//       __APP_ENV__: JSON.stringify(env.APP_ENV),
//     },
//     resolve: {
//       alias: {
//         '@': fileURLToPath(new URL('./src', import.meta.url))
//       }
//     }
//   }
// });
