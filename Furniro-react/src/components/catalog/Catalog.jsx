import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductList } from "./ProductList";

export function Catalog() {
    const [itemsPerPage, setItemsPerPage] = useState(16);

    const handleItemsPerPageChange = (event) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value) && value > 0) {
            setItemsPerPage(value);
        }
    };
    return (
        <>
            <section className="filter-sec">
                <div className="left-menu">
                    <ul>
                        <li><Link to=""><img src="/filter.svg" alt="" />Filter</Link></li>
                        <li><Link to=""><img src="/4dots.svg" alt="" /></Link></li>
                        <li className="border"><Link to=""><img src="/panel.svg" alt="" /></Link></li>
                        <li>Showing products</li>
                    </ul>
                </div>
                <div className="right-menu">
                    <div className="left row">
                        <p>Show</p>
                        <input
                            type="text"
                            value={itemsPerPage}
                            onChange={handleItemsPerPageChange}
                            placeholder="16"
                        />
                    </div>
                    <div className="right row">
                        <p>Sort by</p>
                        <input type="text" className="" placeholder="Default" />
                    </div>
                </div>
            </section>

            <section className="home-products">
                <h2>Our products</h2>
                <ProductList itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />
            </section>
        </>
    );
}
