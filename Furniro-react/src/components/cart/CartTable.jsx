export function CartTable() {
    return (
        <div class="cart-left">
            <table class="cart-table">
                <thead>
                    <tr>
                        <th></th>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Subtotal</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="imgBackground">
                                <img src="/Asgaard sofa.svg" alt="Asgaard sofa" class="product-img" />
                            </div>
                        </td>
                        <td>
                            <p class="grey">Asgaard sofa</p>
                        </td>
                        <td>
                            <p class="grey">Rs. 250,000.00</p>
                        </td>
                        <td class="quantity-td">
                            <input type="text" class="quantity" value="1" />
                        </td>
                        <td>
                            <p>Rs. 250,000.00</p>
                        </td>
                        <td>
                            <img src="/cofa.svg" alt="Remove item" class="trash-icon" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}