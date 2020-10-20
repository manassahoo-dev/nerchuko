import Link from 'next/link';
import Head from 'next/head';
import { useContext } from 'react';
import UserContext from '../components/contexts/UserContext';

const Header = () => {

    const { user, logout } = useContext(UserContext);
    return (
        <>
            <Head>
                <title>The best way to learn Telugu - Nerchuko</title>
                <meta name="keywords" content="learn, telugu, free, lessons, course, language, study, flashcards" />
                <meta name="description" content="Learn Telugu through our lessons such as alphabet, adjectives, nouns, plural, gender, numbers, phrases, grammar, vocabulary, verbs, exam, audio, translation and much more online and for free easily and quickly." />
                <link rel="icon" href="/favicon.ico" />
                <meta name="title" content="The best way to learn Telugu - Nerchuko" />
                <link rel="canonical" href="https://nerchuko.in/" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nerchuko.in/" />
                <meta property="og:title" content="The best way to learn Telugu - Nerchuko" />
                <meta property="og:description" content="Learn Telugu through our lessons such as alphabet, adjectives, nouns, plural, gender, numbers, phrases, grammar, vocabulary, verbs, exam, audio, translation and much more online and for free easily and quickly." />
                <meta property="og:image" content="https://nerchuko.in/thumbnail.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://nerchuko.in/" />
                <meta property="twitter:title" content="The best way to learn Telugu - Nerchuko" />
                <meta property="twitter:description" content="Learn Telugu through our lessons such as alphabet, adjectives, nouns, plural, gender, numbers, phrases, grammar, vocabulary, verbs, exam, audio, translation and much more online and for free easily and quickly." />
                <meta property="twitter:image" content="https://nerchuko.in/thumbnail.png" />

                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossOrigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossOrigin="anonymous"></script>
            </Head>
            <div className="container-fluid shadow-sm">
                <nav className="container navbar navbar-expand-lg navbar-light bg-transparent px-0">
                    <Link href="/"><a className="navbar-brand mb-0 h1 text-primary">Nerchuko</a></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto"></ul>
                        {user ?
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {user.name}
                            </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link href="/profile"><a className="dropdown-item">Profile</a></Link>
                                        <Link href="/setting"><a className="dropdown-item">Settings</a></Link>
                                        <div className="dropdown-divider"></div>
                                        <button
                                            type="submit"
                                            className="dropdown-item"
                                            onClick={logout}>Logout</button>
                                    </div>
                                </li>
                            </ul> :
                            <form className="form-inline my-2 my-lg-0">
                                <Link href="/login"><a className="btn btn-primary">Login</a></Link>
                            </form>
                        }


                    </div>
                </nav>
            </div>
        </>
    )
};

export default Header;