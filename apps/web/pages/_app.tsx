import "@styles/globals.css";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-white dark:bg-[#101935]">
      <Component {...pageProps} />
    </div>
  );
}
