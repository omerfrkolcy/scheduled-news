import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='transition-colors duration-500 bg-white text-neutral-800 dark:bg-neutral-800 dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
