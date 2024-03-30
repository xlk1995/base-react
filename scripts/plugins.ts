// scripts/plugins.ts
import path from 'path'

import { PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export function createPlugins(isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    react(),
    createSvgIconsPlugin({
      // 指定缓存的图标文件夹
      iconDirs: [
        path.resolve(process.cwd(), 'src/assets/icons')
      ],
      symbolId: 'icon-[name]'
    })
  ]
  return vitePlugins
}
