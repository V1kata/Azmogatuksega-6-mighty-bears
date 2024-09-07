import { useNavigate } from "react-router-dom"

export function CartCheckout() {
    const navigate = useNavigate();

    return (
        <div class="cart-right">
            <h3>Cart Totals</h3>
            <div class="subtotal-right">
                <p>Subtotal</p>
                <p class="grey">Rs. 250,000.00</p>
            </div>
            <div class="subtotal-right">
                <p>Total</p>
                <p class="golden">Rs. 250,000.00</p>
            </div>
            <button onClick={() => navigate('/checkout')}>Check out</button>
        </div>
    )
}