import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'

function markdownRawPlugin(): Plugin {
  return {
    name: 'markdown-raw',
    transform(_code, id) {
      if (!id.endsWith('.md')) return null
      const content = fs.readFileSync(id, 'utf-8')
      return {
        code: `export default ${JSON.stringify(content)}`,
        map: null,
      }
    },
  }
}

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    markdownRawPlugin(),
  ],
})
