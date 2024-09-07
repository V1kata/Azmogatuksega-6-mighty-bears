import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Details() {
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        fetch(`https://furniro-production-f169.up.railway.app/categories/${id}`)
            .then((res) => res.json())
            .then((data) => setItem(data));
    }, [])

    return (
        <section className="product-page">
            <div className="product-gallery">
                <img src="/SingleProductAssets/Asgaard sofa 3.svg" alt="Asgaard Sofa" className="main-image" />
                <div className="thumbnail-gallery">
                    <img src="/SingleProductAssets/Outdoor sofa set 2.svg" alt="Outdoor sofa set 2" />
                    <img src="/SingleProductAssets/Outdoor sofa set_2 1.svg" alt="Outdoor sofa set 2.1" />
                    <img src="/SingleProductAssets/Stuart sofa 1.svg" alt="Stuart sofa 1" />
                    <img src="/SingleProductAssets/Maya sofa three seater (1) 1.svg" alt="Maya sofa three seater" />
                </div>
            </div>

            <div className="product-info">
                <h1>Asgaard Sofa</h1>
                <p className="price">Rs. 250,000.00</p>
                <div className="rating">
                    <img src="/SingleProductAssets/stars.svg" alt="star" className="stars" />
                    <span className="reviews">5 Customer Reviews</span>
                </div>
                <p className="short-desc">Setting the bar as one of the loudest speakers
                    in its className, the Kilburn is a compact,
                    stout-hearted hero with a well-balanced audio which boasts a clear
                    midrange and extended highs for a sound.
                </p>

                <div className="size-select">
                    <p>Size:</p>
                    <button className="active sizebtn">L</button>
                    <button className="sizebtn">XL</button>
                    <button className="sizebtn">XS</button>
                </div>

                <div className="color-select">
                    <p>Color:</p>
                    <button className="color-option purple"></button>
                    <button className="color-option color-selected"></button>
                    <button className="color-option brown"></button>
                </div>
                <div style={{ display: "inline-flex", flexDirection: 'row', justifyContent: ' space-between', gap: '50px' }}>
                    <div className="quantity">
                        <button className="qty-btn">-</button>
                        <input type="number" defaultValue="1" min="1" />
                        <button className="qty-btn">+</button>
                    </div>

                    <div className="actions">
                        <button className="add-to-cart">Add To Cart</button>
                        <button className="compare">+ Compare</button>
                    </div>
                </div>
                <div>
                    <img src="/SingleProductAssets/Line 7.svg" />
                </div>
                <div className="sku-category">
                    <p>SKU <span style={{ paddingLeft: "61px" }}>:</span> <span style={{ paddingLeft: "12px" }}>SS001</span></p>
                    <p>Category <span style={{ paddingLeft: "16px" }}>:</span> <span style={{ paddingLeft: "12px" }}>Sofas</span></p>
                    <p>Tags <span style={{ paddingLeft: "52px" }}>:</span> <span style={{ paddingLeft: "12px" }}>Sofa, Chair, Home,
                        Shop</span></p>
                    <p style={{ display: "inline" }}>Share<span style={{ paddingLeft: "44px" }}>:</span>
                        <span style={{ paddingLeft: "12px" }}>
                            <section className="media-section">
                                <a href="#"><img src="/SingleProductAssets/akar-icons_facebook-fill.svg" alt="Facebook" /></a><a
                                    href="#"><img src="/SingleProductAssets/akar-icons_linkedin-box-fill.svg"
                                        alt="Linkedin" /></a><a href="#"><img src="/SingleProductAssets/Vector (1).svg"
                                            alt="Twitter" /></a>
                            </section>
                        </span></p>
                </div>
            </div>
        </section >
    )
}