export function Home() {
    return (
        <>
            <section className="home-main-section">
                <img src="/main img.svg" alt="" />
                <div className="main-sec-card">
                    <div className="inner-card">
                        <p>New Arrival</p>
                        <h1>Discover Our New Collection</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                            mattis.</p>
                        <a href="#">BUY NOW</a>
                    </div>
                </div>
            </section>

            <section className="browse-range">
                <div className="range-text">
                    <h2>Browse the range</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="range-cards">
                    <div className="range-card">
                        <img src="/Mask Group.svg" alt="" />
                        <p>Dining</p>
                    </div>
                    <div className="range-card">
                        <img src="/Image-living room.svg" alt="" />
                        <p>Living</p>
                    </div>
                    <div className="range-card">
                        <img src="/Mask Group2.svg" alt="" />
                        <p>Bedroom</p>
                    </div>
                </div>
            </section>

            <section className="home-products">
                <h2>Our products</h2>
                <div className="product-cards">
                    <div className="product-card">
                        <div className="imgDiv">
                            <img src="assets/sylthrie.svg" alt="" />
                            <div className="circle procent">
                            <p style={{color: 'white'}}>-30%</p>
                            </div>
                        </div>
                        <div className="product-text">
                            <div className="product-padding-text">
                                <h3>Syltherine</h3>
                                <p className="shortDesc">Stylish cafe chair</p>
                                <div className="price">
                                    <p className="discountedPrice">Rp 2.500.000</p>
                                    <p className="mainPrice">Rp 3.500.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="imgDiv">
                            <img src="assets/sylthrie.svg" alt="" />
                            <div className="circle procent">
                                <p style={{ color: 'white' }}>-30%</p>
                            </div>
                        </div>
                        <div className="product-text">
                            <div className="product-padding-text">
                                <h3>Syltherine</h3>
                                <p className="shortDesc">Stylish cafe chair</p>
                                <div className="price">
                                    <p className="discountedPrice">Rp 2.500.000</p>
                                    <p className="mainPrice">Rp 3.500.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="imgDiv">
                            <img src="assets/sylthrie.svg" alt="" />
                            <div className="circle procent">
                                <p style={{ color: 'white' }}>-30%</p>
                            </div>
                        </div>
                        <div className="product-text">
                            <div className="product-padding-text">
                                <h3>Syltherine</h3>
                                <p className="shortDesc">Stylish cafe chair</p>
                                <div className="price">
                                    <p className="discountedPrice">Rp 2.500.000</p>
                                    <p className="mainPrice">Rp 3.500.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="imgDiv">
                            <img src="assets/sylthrie.svg" alt="" />
                            <div className="circle procent">
                                <p style={{ color: 'white' }}>-30%</p>
                            </div>
                        </div>
                        <div className="product-text">
                            <div className="product-padding-text">
                                <h3>Syltherine</h3>
                                <p className="shortDesc">Stylish cafe chair</p>
                                <div className="price">
                                    <p className="discountedPrice">Rp 2.500.000</p>
                                    <p className="mainPrice">Rp 3.500.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="product-more">Show more</button>
            </section>
        </>
    )
}