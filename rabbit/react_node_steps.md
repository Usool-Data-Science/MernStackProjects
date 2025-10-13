<!-- FRONTEND -->

0. Create frontend and backend folder, then install tailwindcss intellisense, tailwind vite, interfont (by pasting the link inside our own index and add the root css config), remove the App.css and then install React Router and react-icons
   NOTE: To install tailwindcss, strictly follow the official guide: `https://tailwindcss.com/docs/installation/using-vite` and if you want to extend say the theme color strictly follow this guide: `https://tailwindcss.com/docs/theme`

1. If autoformat is not set, install prettier and add its config, then set it as default formatter in vscode settings.json
2. If you are on wsl extend the vite server config with this attributes to enable auto refresh: `watch: {usePolling: true,},host: true,`
3. For structure split it into components and pages:
   -> Components: Admin, Cart, Common, Layout, Products
   -> Pages: Home, Admin, Login, Collection
