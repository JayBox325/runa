import Head from 'next/head'
import Link from 'next/link'
import Navbar from './navbar'

const Layout = (props) => {

    return (
        <div>
            <Head>
                {/* <link rel="icon" href="/favicon.ico" /> */}
                <meta name="description" content="This is my description" />
            </Head>
            <header className='z-50 bg-opacity-90 bg-white fixed top-0 left-0 w-full h-20 xl:h-28'>
                <div className='container h-full'>
                    <div className='h-full w-full relative flex flex-row items-center justify-between'>
                        <div className='flex-1'>
                            <Link href='/' scroll={false}>🐶 Runa</Link>
                        </div>
                        <Navbar />
                    </div>
                </div>
            </header>
            <main className="relative">{props.children}</main>
        </div>
    )
}
export default Layout