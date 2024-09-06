import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";

export function Catalog() {
    const [items, setItems] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(16);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch("https://furniro-production-f169.up.railway.app/items")
            .then((res) => res.json())
            .then((data) => setItems(data.items));
    }, []);

    const handleItemsPerPageChange = (event) => {
        const value = parseInt(event.target.value);
        if (isNaN(value) || value <= 0) {
            setItemsPerPage(1);
        } else {
            setItemsPerPage(value);
        }
        setCurrentPage(1);
    };

    const getVisibleItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, items.length);
        return items.slice(startIndex, endIndex);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, items.length);

    return (
        <>
            <section className="filter-sec">
                <div className="left-menu">
                    <ul>
                        <li><Link to=""><img src="/filter.svg" alt="" />Filter</Link></li>
                        <li><Link to=""><img src="/4dots.svg" alt="" /></Link></li>
                        <li className="border"><Link to=""><img src="/panel.svg" alt="" /></Link></li>
                        {/* Update the text here */}
                        <li>Showing {startItem}–{endItem} of {items.length} results</li>
                    </ul>
                </div>
                <div className="right-menu">
                    <div className="left row">
                        <p>Show</p>
                        <input
                            type="text"
                            className=""
                            placeholder="16"
                            value={itemsPerPage}
                            onChange={handleItemsPerPageChange}
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
                <div className="product-cards">
                    {getVisibleItems().map((x) => (
                        <ProductCard item={x} key={x._id} />
                    ))}
                </div>

                <div className="page-numbers">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            className={currentPage === i + 1 ? "active" : ""}
                            onClick={() => handlePageChange(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </section>
        </>
    );
}
