import './toeshoesusa.css'
import Footer from './components/footer'
import Banner from './components/banner'

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
	'anatomy': AnatomyPage,
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
			<div id="toeshoesusa">
				<PageComponent 
	                currentPage = {currentPage}
					addNewPage = {addNewPage}
				/>
			</div>
        </>
    );
}

function MainPage({ addNewPage }: pageProps) {
    return (
        <>
			<div className="page-content">
				<div className="banner">
					<img src={`${import.meta.env.BASE_URL}/pages/toeshoesusa/main/toeshoeslogo.png`} alt="banner1" />
					<Banner/>
				</div>
				<div className="info">
					<div className="accented-text">
						<p>
							Do you want to up your running game? <br/>
							Do you want to embrace modern technology? <br/>
							Do you want to be free? <br/>
							Run like a caveman.
						</p>
					</div>
					<div className="text">
						<p>
							You were born barefoot, your ancestors ran barefoot, and now Toe Shoes allow you to run barefoot, <br/>
							but with expensive shoes that look like feet: slightly deformed, web-toed, brightly-colored feet. <br/>
							You won't notice you're wearing them, but everyone else will.
						</p>
					</div>
					<div className="accented-text">
						<p>
							Don't be shocked if people point at you on the street. They are jealous
						</p>
					</div>
					<div className="text">
						<p>
							Humans have been wearing shoes for 40,000 years. In that time, we have evolved from savage nomads into a variety of <br/>
							civilizations who have invented medicine, democracy and been to the moon. It's time to end the madness. Toe Shoes are <br/>
							like wearing no shoes at all, just as Mother Nature intended. Only they are brightly colored and expensive. Experience all <br/>
							the freedom of a barefoot Sub-Saharan hunter-gather with less of the disease, famine and oppression. <br/>
							Poor people have it great - they run really fast barefoot, often from stealing things. <br/>
							They can't afford these high tech shoes that aren't really shoes, but you can <br/>
						</p>
					</div>
					<div className="accented-text">
						<p>
							Toe Shoes. Modern on the outside, prehistoric on the inside. <br/>
							Don't judge a foot by its cover.
						</p>
					</div>
					<div className="text">
						<p>
							Some people may mock. People will ask, "Why are you wearing clown shoes?", "Are those <br/>
							medical socks for a fungal infection", "Where's the rest of the monkey costume", "If those were designed to give <br/>
							ultramarathoners a competitive edge, why the hell are you wearing them in the <br/>
							supermarket?". But eventually, once you get through the initial months of unbearable pain and <br/>
							ridicule, you'll have the last laugh. Because you're at one with the rhythms of the ground again, <br/>
							sensing every intimate caress of concrete, asphalt, glass shard, medical debris and hardwood flooring splinters through a <br/>
							foot-shaped rubber sock, just like our primordial forefathers did. or would have done. If people had <br/>
							invented Toe Shoes, instead of normal shoes.
						</p>
					</div>
				</div>
				<button className="anatomy" onClick={() => {addNewPage('www.toeshoesusa.com/anatomy')}}>
					EXPLORE THE ANATOMY OF A TOE SHOE
				</button>
				<Footer />
			</div>
        </>
    )
}

function AnatomyPage({ }: pageProps) {
	return (
		<>
			<div className="page-content"> 
				<div className="tagline">
					<p>
						Where sport fan and nerd combine. All function, no fashion. <br/>
						Anything this ugly must be ultra-efficient.
					</p>
				</div>
				<div className="heading">
					<img src={`${import.meta.env.BASE_URL}/pages/toeshoesusa/anatomy/toeshoesanatomy1.png`} alt="toe shoe" />
					<h1>EXPLORE THE ANATOMY OF A TOE SHOE</h1>
				</div>
				<div className="breakdown">
					<img src={`${import.meta.env.BASE_URL}/pages/toeshoesusa/anatomy/toeshoesanatomy2.png`} alt="exploded view toe shoe" />
					<div className="description">
						<h1>TOES</h1>
						<p>
							Look like an ape, walk like a duck, swim like <br/>
							a penguin. Individual toe pockets - or <br/>
							Tockets - force the toes to splay, leaving <br/>
							them free to snag on sharp objects just as <br/>
							they would if you weren't wearing any <br/>
							protective footwear at all. If only people had <br/>
							invented Toe Shoes instead of normal <br/>
							shoes perhaps humanity wouldn't be in this <br/>
							mess.
						</p>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}
