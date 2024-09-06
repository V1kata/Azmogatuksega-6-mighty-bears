import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CircleStyle } from "./CirleStyle";

export function ProductCard({ item }) {
    console.log(item)
    const [style, setStyle] = useState({ style: '', text: '' });

    useEffect(() => {
        item.procent > 0 ? setStyle({ style: 'procent', text: item.procent })
            : item.markAsNew ? setStyle({ style: 'new', text: 'New' }) : '';
    }, [item])

    return (
        <div className="product-card">
            <div className="overlay">
                <div className="imgDiv">
                    <img src={`data:image/jpeg;base64,${item['images'][0].content}`} alt="" />
                    {item.procent == 0 || item.markAsNew ? <CircleStyle style={style.style} text={style.text} /> : <></>}
                </div>
                <div className="hover-hidden">
                    <div className="hover-container">
                        <button className="add-product">Add to cart</button>
                        <ul className="hover-icons">
                            <li><Link to=""><img src="/gridicons_share.svg" alt="" />Share</Link></li>
                            <li><Link to=""><img src="/compare.svg" alt="" />Compare</Link></li>
                            <li><Link to=""><img src="/heart2.svg" alt="" />Like</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="product-text">
                    <div className="product-padding-text">
                        <h3>{item.name}</h3>
                        <p className="shortDesc">{item.shortDescription}</p>
                        <div className="price">
                            <p className="discountedPrice">
                                {item.discount > 0 ? (item.price * ((100 - item.discount) / 100)).toFixed(2) : item.price} lv.
                            </p>
                            {item.discount > 0 && <p className="mainPrice">{item.price} lv.</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}