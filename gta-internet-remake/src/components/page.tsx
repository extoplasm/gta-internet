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


export default function Header({ currentPage, addNewPage }: Props) {
    const PageComponent = componentMapping[currentPage] 
    console.log(currentPage)
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <PageComponent />
            </Suspense>
            <button onClick={() => addNewPage('www.eyefind.info')}>go to www.eyefind.info</button>
            <button onClick={() => addNewPage('www.toeshoeusa.com')}>go to www.toeshoeusa.com</button>
        </>
    );
}