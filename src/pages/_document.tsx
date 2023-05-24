import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="theme-color" content="#ffffff" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="language" content="English" />
                    <meta name="author" content="Leon Muhia" />
                </Head>
                <body className="disable-scrollbars">
                    <Main />
                    <NextScript />
                    <script async src="/js/plugins.js" />
                    {/* <script async src="/js/main.js" /> */}
                </body>
            </Html>
        );
    }
}

export default MyDocument;
