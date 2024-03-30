// tailwind.config.js
/** @type {import('tailwindcss').Config} */
// 在index.html以及通过glob匹配的./src/**/*.{js,ts,jsx,tsx}这些文件中,tailwind才会生效
// 并通过theme.screens自定义一下响应式屏幕界点(为了通用性，我们与bootstrap一致)
module.exports = {
  // prefix: 'tw-',
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px'
    },
    extend: {
      fontFamily: {
        standard: 'var(--font-family-standard)',
        firacode: 'var(--font-family-firacode)'
      },
      fontSize: {
        xs: ['0.25rem', '0.35rem'],
        sm: ['0.35rem', '0.45rem'],
        base: ['0.45rem', '0.55rem'],
        lg: ['0.55rem', '0.65rem'],
        xl: ['0.65rem', '0.75rem']
      },
      boxShadow: {
        'l-white': '-10px 0 10 white'
      }
    }
  },
  // 为了防止tailwind与antd产生样式冲突
  corePlugins: {
    preflight: false
  },
  // 如果在某些情况下实在需要使用不完整类名来拼装
  safelist: [
    'text-red',
    'text-green',
    {
      // 使用正则匹配多个类
      pattern: /bg-(red|green|blue)-(100|200|300)/,
      // 同时把匹配到的类的修饰符类也加上
      variants: ['hover', 'focus']
    }
  ],
  plugins: []
}
