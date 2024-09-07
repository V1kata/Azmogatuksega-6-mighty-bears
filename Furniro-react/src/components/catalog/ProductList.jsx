import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";

export function ProductList({ itemsPerPage, setItemsPerPage }) {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch("https://furniro-production-f169.up.railway.app/items")
            .then((res) => res.json())
            .then((data) => setItems(data.items));
    }, []);

    const getVisibleItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, items.length);
        return items.slice(startIndex, endIndex);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(items.length / itemsPerPage);

    return (
        <>
            <div className="product-cards">
                {getVisibleItems().map((item) => (
                    <ProductCard item={item} key={item._id} />
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
        </>
    );
}
