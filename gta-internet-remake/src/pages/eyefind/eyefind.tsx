import './eyefind.css'

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
            <img src="../../eyefind-logo.png" alt="logo" />
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