import jwt from 'next-auth/jwt'

const secret = process.env.JWT_SECRET

export function token(req, res) {
    const token = await jwt.getToken({ req, secret, raw: false });
    res.send(JSON.stringify(token, null, 2))
};