import Link from 'next/link'
export default function Signup() {
    return <>
        <div className="row">
            <div className="col d-none d-sm-block"></div>
            <div className="col-sm-6 col-lg-5">
                <div className="card shadow  m-auto">
                    <div className="card-body m-4">
                        <h1 className="text-primary text-center">Signup</h1>
                        <form className="my-4">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Signup</button>
                        </form>
                        <span>Already have an account?</span><Link href="/login"><a className="mx-2">Login</a></Link>
                    </div>
                </div>
            </div>
            <div className="col d-none d-sm-block"></div>
        </div>
    </>
}