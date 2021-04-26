import Head from 'next/head'
const Meta = ({ keywords, description, title, url, image }) => (
    <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta name="title" content={title} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
m        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
    </Head>
)

Meta.defaultProps = {
    image: 'https://nerchuko.in/images/thumbnail.png',
    url: 'https://nerchuko.in',
    title: 'The best way to learn Telugu - Nerchuko',
    keywords: 'learn, telugu, free, lessons, course, language, study, flashcards',
    description: 'Learn Telugu through our lessons such as alphabet, adjectives, nouns, plural, gender, numbers, phrases, grammar, vocabulary, verbs, exam, audio, translation and much more online and for free easily and quickly.',
}

export default Meta