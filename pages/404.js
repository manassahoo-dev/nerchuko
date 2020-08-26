import Link from 'next/link'
export default () => <>
    <div className="row justify-content-center">
        <div className="col-lg-4">
            <div className="text-center">
                <h1 className="text-muted display-1 font-weight-bold my-4">404</h1>
                <h4 className="text-uppercase text-danger mt-3">Page Not Found</h4>
                <p className="text-muted mt-3">It's looking like you may have taken a wrong turn. Don't worry... it
                happens to the best of us. Here's a
            little tip that might help you get back on track.</p>

            <Link href="/"><a className="btn btn-primary mt-3"><i className="mdi mdi-reply"></i> Return Home</a></Link>
            </div>
        </div>
    </div>
</>