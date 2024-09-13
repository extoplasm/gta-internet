import './eyefind.css'
import Navbar from './components/navbar'
import SearchList from './components/searchlist'
import Advertisement from './../../components/advertisement'

interface Props {
    currentPage: string;
    addNewPage: Function;
}

// dynamically import component
const subPages = {
    '': MainPage,
    'error': ErrorPage,
    'search': SearchPage,
}

const getQueryString = (page: string) => {
    let match = page.match(/[^/]*\/([^+]*)/); // capture after first / and before + (eyefind.info/search+"query") to return search only
    return match ? match[1] : '';
}

const getSearchQuery = (page: string) => {
    let match = page.match(/(?<=\+)(.*)/); // returns anything after +
    return match ? match[0] : '';
}

export default function Page({ currentPage, addNewPage }: Props) {
    // @ts-expect-error (not sure why this keeps happening)
    const PageComponent = subPages[getQueryString(currentPage)]
    return ( 
        <>
			<div id="eyefind">
				<PageComponent 
					currentPage = {currentPage}
					addNewPage = {addNewPage}
				/>
			</div>
        </>
    );
}

function ErrorPage({ currentPage, addNewPage }: Props) {
    return (
        <>
			<div className="page-content">
				{currentPage}
				<br/> 
				<button onClick={() => addNewPage('www.eyefind.info')}>go to www.eyefind.info</button>
				<br/>
				<button onClick={() => addNewPage('www.toeshoesusa.com')}>go to www.toeshoesusa.com</button> 
			</div>
		</>
    )
}

function MainPage({ currentPage, addNewPage }: Props) {
    return (
        <>
            <Navbar 
                addNewPage={addNewPage}
            />
            <p>{currentPage}</p>
            <div className="page-content">
                <div className="news-story-of-the-day">
                    <h1>NEWS STORY OF THE DAY</h1>
                    <p>placeholder</p>
                    <img src="../../../pages/eyefind/eyefind-logo.png" alt="placeholder" />
                    <br/>
                    <p>placeholder author - placeholder news</p>
                    <p>
                        placeholder content
                    </p>
                    <button className="expand">READ FULL ARTICLE</button>
                </div>
                <Advertisement addNewPage={addNewPage}/>
                <div className="website-of-the-minute">
                    <h1>WEBSITE OF THE MINUTE</h1>
                    <p>www.toeshoesusa.com</p>
                    <p>Toe Shoes. Modern on the outside, prehistoric on the inside. Don't judge a foot by its cover.</p>
                </div>
            </div>
		</>
    )
}

function SearchPage({ currentPage, addNewPage }: Props) {
    return (
        <>
            <Navbar
                addNewPage={addNewPage}
            />
            <SearchList
                query={getSearchQuery(currentPage)}
                addNewPage={addNewPage}
            />
        </>
    )
}
