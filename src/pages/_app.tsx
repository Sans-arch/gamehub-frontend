import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

import "../styles/global.css";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-poppins: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
