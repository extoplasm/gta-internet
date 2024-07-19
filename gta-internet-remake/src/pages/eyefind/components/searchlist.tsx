import './searchlist.css'

interface componentProps {
    query: string;
    addNewPage: Function;
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
                        <button className="page" onClick={() => {addNewPage('www.toeshoesusa.com')}}>
                            <img src="../../../pages/toeshoesusa/toeshoesbanner2.png" alt="placeholder banner" />
                            <p className="page-url">www.toeshoesusa.com</p>
                            <p className="page-summary">toe shoes for real</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}