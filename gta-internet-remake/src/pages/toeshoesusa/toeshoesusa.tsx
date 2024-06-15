import './toeshoesusa.css'

interface Props {
    currentPage: string;
    addNewPage: Function;
}

interface pageProps {
    addNewPage: Function;
}

const getQueryString = (page: string) => {
    let match = page.match(/[^/]*\/(.*)/); // match up to the first / to get whichever page we need
    return match ? match[1] : '';
}

export default function Page({ currentPage, addNewPage }: Props) {
    console.log(getQueryString(currentPage))
    return (
        <>
            {
                getQueryString(currentPage) === '' &&
                <MainPage
                    addNewPage={addNewPage}
                />
            }
        </>
    );
}

function MainPage({ addNewPage }: pageProps) {
    return (
        <>
            <img src="../../toeshoesusa-logo.png" alt="logo" />
            <br/>
            <button onClick={() => addNewPage('www.toeshoesusa.com')}>go to www.toeshoesusa.com</button>
        </>
    )
}