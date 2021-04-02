import React, { Component } from 'react'
import Router from 'next/router'

function privateRoute(AuthComponent) {
    return class Authenticated extends Component {
        static async getInitialProps(ctx) {
            // Check if Page has a `getInitialProps`; if so, call it.
            const pageProps =
                AuthComponent.getInitialProps &&
                (await AuthComponent.getInitialProps(ctx))
            // Return props.
            return { ...pageProps }
        }
        constructor(props) {
            super(props)
            this.state = {
                isLoading: true,
                token: ''
            }
        }
        componentDidMount() {
            if (!localStorage.getItem("t")) {
                Router.push('/accounts/login')
            }
            this.setState({ isLoading: false })
        }
        render() {
            return (
                <div>
                    {this.state.isLoading ? (
                        <div>LOADING....</div>
                    ) : (
                        <AuthComponent {...this.props} />
                    )}
                </div>
            )
        }
    }
}

export default privateRoute;