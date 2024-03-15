# Material Tailwind Vue

## Getting Started

Learn how to use material-tailwind-vue components to quickly and easily create elegant and flexible pages using Tailwind CSS.

`material-tailwind-vue` is working with Tailwind CSS classes and you need to have Tailwind CSS installed on your project.

1.  Install `material-tailwind-vue`

```bash
npm i material-tailwind-vue
```

2.  Once you install `material-tailwind-vue`, you'll need to adjust your tailwind CSS settings from your config file.

```ts
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/material-tailwind-vue/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

3.  Congratulations 🥳👌, you did it, now you're ready to use `material-tailwind-vue`.

## Contributing

Contributing are always welcome!
