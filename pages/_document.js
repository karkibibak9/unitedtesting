import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="./favi.svg" />
        <meta name="geo.region" content="NP-JA" />
        <meta name="geo.placename" content="lalbandi" />
        <meta name="geo.position" content="27.055457504559374;85.62697981349362" />
        <meta name="ICBM" content="27.055457504559374, 85.62697981349362" />
        <meta name="keywords" content="Hotel United Inn, Hotel United, Hotel In Lalbandi, hotel in sarlahi, Hotel in janakpur, united Inn., " />
        <meta name="author" content="Deepak Balampaki" />
        <meta property="og:title" content="Hotel United Inn" />
        <meta name="description" property="og:description" content="Hotel United Inn provides Coffee Shop Bar and Restaurant Rooms Meeting Halls, The Hotel United Inn. is located in Lalbandi" />

        <title>Hotel United Inn</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument