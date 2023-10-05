import { defineConfig } from "vitest/config";

export default defineConfig({
    base: "/typingTas_alphabet/",
    build: {
      target: "esnext",
      sourcemap: true
    },
    test: {
      environment: 'jsdom',
      include: ['tests/*.{test,spec}.{js,ts}']
    }
  });
  