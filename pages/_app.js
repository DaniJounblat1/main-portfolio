import "../styles/sass/main.scss";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/icon.png" />
            </Head>
            <Component {...pageProps} />
            <Analytics />
        </>
    );
}

export default MyApp;
