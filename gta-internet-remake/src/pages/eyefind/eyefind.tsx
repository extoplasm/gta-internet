import './eyefind.css'

interface Props {
    currentPage: string;
    addNewPage: Function;
}

export default function Page({ currentPage, addNewPage }: Props) {
    return (
        <>
            {currentPage}
        </>
    );
}