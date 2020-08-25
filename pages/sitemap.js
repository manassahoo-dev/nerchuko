import Link from 'next/link'
export default function Sitemap() {
    return <>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link href="/"><a className="text-decoration-none text-primary">Home</a></Link></li>
                <li class="breadcrumb-item active" aria-current="page">Library</li>
            </ol>
        </nav>

        <h1 className="my-4">Sitemap</h1>
        <ul>
            <li><Link href="/"><a className="text-decoration-none text-primary">Home</a></Link></li>
            <li><Link href="/login"><a className="text-decoration-none text-primary">Login</a></Link></li>
            <li><Link href="/signup"><a className="text-decoration-none text-primary">Signup</a></Link></li>
        </ul>
    </>
}