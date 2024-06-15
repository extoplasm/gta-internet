import './toeshoeusa.css'

interface Props {
    currentPage: string;
    addNewPage: Function;
}

export default function Page({ currentPage, addNewPage }: Props) {
    return (
        <>
            {currentPage}
            <br/> 
            <button onClick={() => addNewPage('www.eyefind.info')}>go to www.eyefind.info</button>
        </>
    );
}