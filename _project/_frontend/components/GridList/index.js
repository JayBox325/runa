import GridItem from '../GridItem'

export default function GridList({data, type, columns='4'}) {

    let gridClasses = null
    let colClasses = null

    if (columns == '4') {
        colClasses = 'col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-4 xl:col-span-3'
        gridClasses = 'xl:gap-10 2xl:gap-12'
    } else if (columns == '3') {
        colClasses = 'col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-4 xl:col-span-4'
        gridClasses = 'xl:gap-16 2xl:gap-20'
    }
    
    return (
        <ul className={`grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-6 lg:gap-8 ${gridClasses}`}>
            {data.map((post) => (
                <li key={post.slug} className={colClasses}>
                    <GridItem type={type} data={post} />
                </li>
            ))}
        </ul>
    )
}