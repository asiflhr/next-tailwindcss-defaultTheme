# next-tailwindcss-defaultTheme

A ReactJS/NextJS supported customizable default theme using Tailwind CSS.

To use the package in another Next.js project after publishing to npms, you can follow these steps:

```bash
  run npm i next-tailwindcss-defaultTheme
```

Import the default theme and plugins in your Next.js project. You can do this in the pages/\_app.js file:

```javascript
import { defaultTheme, defaultPlugins } from 'next-tailwindcss-defaulttheme'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  )
}
```

You don't need to install Tailwind CSS separately in the Next.js project. The package will automatically use the Tailwind CSS styles that are defined in the tailwind.config.js file.

```javascript
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-primary text-secondary'>
      <Head>
        <title>Next.js Tailwind CSS Default Theme</title>
        <meta
          name='description'
          content='A boilerplate for Next.js projects using Tailwind CSS.'
        />
      </Head>
      <main>
        <h1 className='text-3xl font-bold'>
          Next.js Tailwind CSS Default Theme
        </h1>
        <p>
          This is a boilerplate for Next.js projects using Tailwind CSS. It
          comes with a default theme that you can customize to your liking.
        </p>
        <Image src='/image.jpg' width={500} height={500} alt='Image' />
      </main>
    </div>
  )
}
```

## Authors

- Visit my [Github](https://www.github.com/asiflhr) profile

## 🚀 About Me

Hi, I'm a React | NextJS | React-Native Developer from Pakistan.

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)

[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

## Used By

This project is used by the following companies:

- [Infostack](https://www.infostacktech.com)
- [Nexxt.ai](https://www.nexxt.ai)
- [Visitlye](https://www.visitlye.com)
