import Link from 'next/link'
export default function Login() {
    return <>
        <div className="row">
            <div className="col d-none d-sm-block"></div>
            <div className="col-sm-6 col-lg-5">
                <div className="card shadow  m-auto">
                    <div className="card-body m-4">
                        <h1 className="text-primary text-center">Login</h1>
                        <form className="my-4">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="remember">
                                    <input className="checkbox" id="remember" type="checkbox" />
                                    <span>Remember me</span>
                                </label>
                                <Link href="/forgot"><a className="float-right">Forgot password?</a></Link>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                            </div>
                            <div className="form-group">
                                <p className="text-muted text-center">Do not have an account?
                                    <Link href="/signup"><a className="mx-2">Signup</a></Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col d-none d-sm-block"></div>
        </div>
    </>
}