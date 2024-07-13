import './eyefind.css'
import Navbar from './components/navbar'

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
            <PageComponent 
                currentPage = {currentPage}
                addNewPage = {addNewPage}
            />
        </>
    );
}

function ErrorPage({ currentPage, addNewPage }: Props) {
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

function MainPage({ currentPage, addNewPage }: Props) {
    return (
        <>
            <Navbar 
                addNewPage={addNewPage}
            />
            <button onClick={() => addNewPage('www.toeshoesusa.com')}>go to www.toeshoesusa.com</button>
        </>
    )
}

function SearchPage({ currentPage, addNewPage }: Props) {
    return (
        <>
            <Navbar
                addNewPage={addNewPage}
            />
            <p>{getSearchQuery(currentPage)}</p>
            <button onClick={() => addNewPage('www.toeshoesusa.com')}>go to www.toeshoesusa.com</button>
        </>
    )
}