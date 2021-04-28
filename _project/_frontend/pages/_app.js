import Layout from '../components/Layout'

// CSS
import '../styles/globals.scss'
import '../styles/utilities.scss'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
