import axios from 'axios';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Providers.Facebook({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }),
        Providers.Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                return credentials;
            }
        })
    ],
    debug: false,
    jwt: {
        secret: process.env.JWT_SECRET,
        raw: true
    },
    cookies: { sessionToken: { name: `next-auth.session-token`, options: { httpOnly: false } } },
    site: process.env.NEXT_PUBLIC_BASE_URL,
    callbacks: {
        async signIn(user, account, profile) {
            const param = { user, account }
            axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/session`, param)
                .then(function (response) {
                    if (response.status === 200) {
                        return true;
                    }
                })
                .catch(function (error) {
                    console.error(error.response);
                    return false;
                }).then(function () {
                    // setLoading(false);
                });
        },
        async redirect(url, baseUrl) {
            return baseUrl
        },
        async session(session, user) {
            return session
        },
        async jwt(token, user, account, profile, isNewUser) {
            return token
        }
    },
}
export default (req, res) => NextAuth(req, res, options)