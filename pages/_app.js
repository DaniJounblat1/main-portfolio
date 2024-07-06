// pages/_app.js
import "../styles/sass/main.scss";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
