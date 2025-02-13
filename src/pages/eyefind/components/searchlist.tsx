import './searchlist.css'
import categoryData from '../../../assets/pagecategories.json'

interface componentProps {
    query: string;
    addNewPage: Function;
}

interface category {
    url: string;
    description: string;
    imagesrc: string;
}

const returnPageList = (category: string): Array<category> => {
    if (category === 'random') return [{url: "www.toeshoesusa.com", description: "bruh", imagesrc:"bruh"}]
    // @ts-expect-error
    return categoryData[category];
}

export default function SearchList({ query, addNewPage }: componentProps) {
    return (
        <>
            <div className="page-content">
                <div id="search-results">
                    <h2>
                        Results for: {query.toUpperCase()}
                    </h2>
                    <div className="page-list">
                        {returnPageList(query)
                            .map((e,_) => (
                                <button className="page" 
                                        key={_}
                                        onClick={() => addNewPage(e.url)}>
                                    <img src={`${import.meta.env.BASE_URL}${e.imagesrc}`} alt={e.url} />
                                    <p>{e.description}</p>
                                </button>
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}