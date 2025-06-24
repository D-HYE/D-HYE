// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // <- 배포 시 상대 경로로 설정됨
  plugins: [react()],
});
