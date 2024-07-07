import './eyefind.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faSun } from '@fortawesome/free-solid-svg-icons'
import pageData from '../../assets/pagedata.json'

interface Props {
    currentPage: string;
    addNewPage: Function;
}

interface pageProps {
    addNewPage: Function;
}

// dynamically import component
const subPages = {
    '': MainPage,
    'error': ErrorPage,
}

const getQueryString = (page: string) => {
    let match = page.match(/[^/]*\/(.*)/); // match up to the first / to get whichever page we need
    return match ? match[1] : '';
}

const getRandomPage = (data : object) => {
    const pages = Object.keys(data);
    const randomIndex = Math.floor(Math.random() * pages.length)
    return pages[randomIndex]
}

export default function Page({ currentPage, addNewPage }: Props) {
    // @ts-expect-error (not sure why this keeps happening)
    const PageComponent = subPages[getQueryString(currentPage)]
    return ( 
        <>
            <PageComponent 
                currentPage = {currentPage}
                addNewPage = {addNewPage}
            />
        </>
    );
}

function Navbar({ addNewPage }: pageProps) {
    return (
        <>
            <div className="eyefind-banner">
                <div className="info">
                    <img className="logo" src="../../eyefind-logo.png" alt="logo" />
                    <div className="weather">
                        <div className="weather-text">
                            <p>Rockford Hills</p>
                            <p>{}</p>
                        </div>
                        <div className="weather-icon">
                            <FontAwesomeIcon icon={faSun}/>
                        </div>
                    </div>
                </div>
                <div className="page-nav">
                    <div className="search-bar">
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        <input 
                            className="search-field" 
                            type="text"
                            autoComplete="off"
                            placeholder="Search Eyefind" 
                        />
                    </div>
                    <button className="random" onClick={() => 
                        addNewPage(getRandomPage(pageData))
                    }>
                        RANDOM
                    </button>
                </div>
            </div>
        </>
    )
}

function ErrorPage({ addNewPage }: pageProps) {
    return (
        <>
            error
            <br/> 
            <button onClick={() => addNewPage('www.eyefind.info')}>go to www.eyefind.info</button>
            <br/>
            <button onClick={() => addNewPage('www.toeshoesusa.com')}>go to www.toeshoesusa.com</button> 
        </>
    )
}

function MainPage({ addNewPage }: pageProps) {
    return (
        <>
            <Navbar 
                addNewPage={addNewPage}
            />
            <button onClick={() => addNewPage('www.toeshoesusa.com')}>go to www.toeshoesusa.com</button>
        </>
    )
}