import SocialIcons from '../components/SocialIcons'
import GridList from '../components/GridList'

function Homepage() {

    const promos = [
        {
            slug: 'promo-1',
            post_title: 'Promo grid list items',
            url: 'http://google.com'
        },
        {
            slug: 'promo-2',
            post_title: 'Using the GridList component',
            url: '/news'
        },
        {
            slug: 'promo-3',
            post_title: 'with a \'type\' config of "promo"',
            url: 'http://google.com'
        }
    ]

    return (
        <>
            <div className="w-screen h-screen flex items-center flex-col justify-center text-center">
                <span className="mb-2 title-1 md:mb-4 lg:mb-6">👋</span>
                <SocialIcons />
            </div>
            <section className="row bg-gray-100">
                <div className="container">
                    <GridList columns='3' data={promos} />
                </div>
            </section>
        </>
    )
}

export default Homepage
