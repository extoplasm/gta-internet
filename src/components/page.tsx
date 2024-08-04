import { Suspense, lazy } from 'react';
import pageData from '../assets/pagedata.json'; // Import the JSON file

interface Props {
    currentPage: string;
    addNewPage: Function;
}

// dynamically import component
const loadComponent = (componentName: string) => {
    return lazy(() => import(/* @vite-ignore */`../pages/${componentName}`));
};

const componentMapping = Object.fromEntries(
    Object.entries(pageData).map(([key, value]) => [key, loadComponent(value.component)])
);

// only get origin page (eg. www.eyefind.info instead of www.eyefind.info/error)
const getOriginPage = (page : string) => {
    let match = page.match(/^[^\/]+/); // match up to the first / to get whichever page we need
    return match ? match[0] : '';
}

export default function Page({ currentPage, addNewPage }: Props) {
    const PageComponent = componentMapping[getOriginPage(currentPage)]
    return (
        <>
            <div id="page-container">
                <Suspense fallback={<div>Loading...</div>}>
                    <PageComponent 
                        currentPage = {currentPage}
                        addNewPage = {addNewPage}
                    />
                </Suspense>
            </div>
        </>
    );
}