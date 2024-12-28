import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true
    }
  }),
});