import { useState } from "react";
import { ProductList } from "../catalog/ProductList";

export function Home() {
    const [page, setPage] = useState(4);  // How many items to show

    const handleShowMore = () => {
        setPage((prevPage) => prevPage + 4);
    };

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
                <ProductList itemsPerPage={page} from={'home'} />
                <button className="product-more" onClick={handleShowMore}>Show more</button>
            </section>
        </>
    );
}
