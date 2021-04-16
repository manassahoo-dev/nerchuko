import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/images/favicon.ico" />
                    <script src="https://apis.google.com/js/platform.js" async defer></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script type="text/javascript" src="/scripts/clarity.js"></script>
                    <script type="application/ld+json" dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org/",
                            "@type": "WebSite",
                            "name": "nerchuko",
                            "logo": "https://nerchuko.in/images/logo.svg",
                            "url": "https://nerchuko.in",
                            "sameAs": [
                                "https://www.facebook.com/telugu.nerchuko",
                                "https://www.facebook.com/groups/nerchuko",
                                "https://www.instagram.com/telugu.nerchuko",
                                "https://pinterest.com/nerchuko",
                            ],
                        })
                    }}>
                    </script>
                    <script src="https://www.googleoptimize.com/optimize.js?id=OPT-NJP7KPV"></script>
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=UA-49136745-2`} />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());                          
                            gtag('config', 'UA-49136745-2');`,
                        }}
                    />
                </body>
            </Html>
        )
    }
}

export default MyDocument