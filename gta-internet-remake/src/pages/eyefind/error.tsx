import './eyefind.css'

interface Props {
    currentPage: string;
    addNewPage: Function;
}
// this will get used later for real not fake!!!!  probably will put this inside the eyefind.tsx file though 
export default function Page({ currentPage, addNewPage }: Props) {
    return (
        <>
            {currentPage}
        </>
    );
}