import type { AppProps } from "next/app";
import { Poppins, DM_Sans } from "next/font/google";

import "../styles/global.css";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

export const DMSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-poppins: ${poppins.style.fontFamily};
          --font-dmsans: ${DMSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
