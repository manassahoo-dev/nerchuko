import Link from 'next/link'

const Footer = () => (
  <footer className="footer">
    <section className="mx-4">
    <Link href="/">
      <a>© nerchuko.in</a>
    </Link>
    <Link href="/privacy">
      <a className="mx-2 float-right">Privacy Policy</a>
    </Link>
    <Link href="/terms">
      <a className="mx-2 float-right">Terms of Service</a>
    </Link>
    <Link href="/sitemap">
      <a className="mx-2 float-right">Sitemap</a>
    </Link>
    </section>
  </footer>
);

export default Footer;