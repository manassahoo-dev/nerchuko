import Link from 'next/link'
import { Space, Breadcrumb } from 'antd';
export default function Sitemap() {
    return <>
        <br />
        <Breadcrumb>
            <Breadcrumb.Item><Link href="/"><a>Home</a></Link></Breadcrumb.Item>
            <Breadcrumb.Item>Sitemap</Breadcrumb.Item>
        </Breadcrumb>
        <br />
        <h1 className="my-4">Sitemap</h1>
        <ul>
            <li><Link href="/"><a className="text-primary">Home</a></Link></li>
            <li><Link href="/accounts/login"><a className="text-primary">Login</a></Link></li>
            <li><Link href="/accounts/signup"><a className="text-primary">Signup</a></Link></li>
        </ul>
    </>
}