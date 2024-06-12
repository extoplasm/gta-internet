import { Suspense, lazy } from 'react';
import './page.css';

const Eyefind = lazy(() => import('../pages/eyefind/eyefind'));

interface Props {
    currentPage: string
    addNewPage: Function
}

export default function Page({ currentPage, addNewPage }: Props) {
    return (
        <>
            {currentPage === 'www.eyefind.info' && (
                <Suspense fallback={<div>Loading...</div>}>
                    <Eyefind />
                </Suspense>
            )}
            {currentPage === 'www.toeshoeusa.com' && (
                <button onClick={() => {addNewPage('www.eyefind.info')}}>go to www.eyefind.info</button>
            )}
            {currentPage !== 'www.eyefind.info' && currentPage !== 'www.toeshoeusa.com' && (
                <>
                    <button onClick={() => {addNewPage('www.eyefind.info')}}>go www.eyefind.info</button>
                    <br />
                    <button onClick={() => {addNewPage('www.toeshoeusa.com')}}>go to www.toeshoeusa.com</button>
                </>
            )}
        </>
    );
}
