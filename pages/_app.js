import "../styles/sass/main.scss";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

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
