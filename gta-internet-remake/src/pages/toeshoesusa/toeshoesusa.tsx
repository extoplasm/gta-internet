import './toeshoesusa.css'

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
    'test': TestPage,
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

function MainPage({ addNewPage }: pageProps) {
    return (
        <>
			<div className="page-content">
				<div className="banner">
					{/* will add images and stuff later */}
				</div>
				<div class="call">
					<p>test</p>
				</div>
			</div>
        </>
    )
}

function TestPage({ addNewPage }: pageProps) {
    return (
        <>
            <button onClick={() => addNewPage('www.eyefind.info')}>go to www.eyefind.info</button> 
        </>
    )
}
