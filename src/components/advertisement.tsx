interface Props {
    addNewPage: Function;
}
 
export default function Page({ addNewPage }: Props) {
    return (
        <>
            <div id="ad-container">
                <button onClick={(addNewPage('www.eyefind.info'))}>yes</button>
            </div>
        </>
    );
}