import './footer.css'

export default function Footer() {
    return (
        <>
            <div id="toeshoesusa-footer">
                <div className="products">
                    <img src={`${import.meta.env.BASE_URL}/pages/toeshoesusa/footer/toeshoesfooter1.png`} alt="formal shoes"/>
                    <img src={`${import.meta.env.BASE_URL}/pages/toeshoesusa/footer/toeshoesfooter2.png`} alt="barefooting"/>
                    <img src={`${import.meta.env.BASE_URL}/pages/toeshoesusa/footer/toeshoesfooter3.png`} alt="repuls range"/>
                </div>
                <div className="description">
                    <p>
                        Available in black or brown leather. Perfect for the workplace, funeral, wedding or that special date you want to impress. Made <br/>
                        to look like dress shoes. Clamp them around her ankle under the table and say "I make fabulous love wearing nothing but my <br/>
                        Toe Shoes". It's a guaranteed deal-closer every time.
                    </p>
                </div>
                <div className="bottom"></div>
            </div>
        </>
    )
}