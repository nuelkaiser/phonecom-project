import "@/styles/globals.scss";

import { Inter, Roboto } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})


const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: "700"
})

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={`${inter.variable} ${roboto.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
