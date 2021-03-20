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
                    <title>The best way to learn Telugu - Nerchuko</title>
                    <meta name="keywords" content="learn, telugu, free, lessons, course, language, study, flashcards" />
                    <meta name="description" content="Learn Telugu through our lessons such as alphabet, adjectives, nouns, plural, gender, numbers, phrases, grammar, vocabulary, verbs, exam, audio, translation and much more online and for free easily and quickly." />
                    <link rel="icon" href="/images/favicon.ico" />
                    <meta name="title" content="The best way to learn Telugu - Nerchuko" />
                    <link rel="canonical" href="https://nerchuko.in/" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://nerchuko.in/" />
                    <meta property="og:title" content="The best way to learn Telugu - Nerchuko" />
                    <meta property="og:description" content="Learn Telugu through our lessons such as alphabet, adjectives, nouns, plural, gender, numbers, phrases, grammar, vocabulary, verbs, exam, audio, translation and much more online and for free easily and quickly." />
                    <meta property="og:image" content="https://nerchuko.in/images/thumbnail.png" />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://nerchuko.in/" />
                    <meta property="twitter:title" content="The best way to learn Telugu - Nerchuko" />
                    <meta property="twitter:description" content="Learn Telugu through our lessons such as alphabet, adjectives, nouns, plural, gender, numbers, phrases, grammar, vocabulary, verbs, exam, audio, translation and much more online and for free easily and quickly." />
                    <meta property="twitter:image" content="https://nerchuko.in/images/thumbnail.png" />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                    />
                    <script type="text/javascript" src="/scripts/clarity.js"></script>
                    <script type="application/ld+json" dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org/",
                            "@type": "WebSite",
                            "name": "nerchuko",
                            "logo": "/images/logo.svg",
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