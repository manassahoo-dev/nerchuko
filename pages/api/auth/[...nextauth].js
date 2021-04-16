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
    site: process.env.NEXTAUTH_URL,
    callbacks: {
        async signIn(user, account, profile) {
            console.error('-------callbacks signin-------');
            console.log(account);
            return true
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