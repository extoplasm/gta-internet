import './searchlist.css'

interface componentProps {
    query: string;
    addNewPage: Function;
}

export default function SearchList({ query, addNewPage }: componentProps) {
    return (
        <>
            <div className="page-content">
                <h2>
                    Results for: {query.toUpperCase()}
                </h2>
                <div className="page-list">
                    <button onClick={() => {addNewPage('www.toeshoesusa.com')}}>go to toeshoesusa</button>
                </div>
            </div>
        </>
    )
}