import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import emailjs from 'emailjs-com';


emailjs.init('__wgu03ejKupMJMAA');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
