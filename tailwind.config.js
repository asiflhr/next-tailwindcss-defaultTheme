module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
   
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '8f3985',
          secondary: '#07BEB8',
        },
        screenSizes: {
          xs: '320px',
          sm: '480px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
        fonts: {
          body: 'sans-serif',
          code: 'monospace',
        },
      },
    },
    plugins: [],
  };
  