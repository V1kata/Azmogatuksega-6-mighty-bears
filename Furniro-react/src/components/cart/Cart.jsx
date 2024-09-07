import { Given } from "../all/Given";
import { CartCheckout } from "./CartCheckout";
import { CartTable } from "./CartTable";

export function Cart() {
    return (
        <>
            <section class="cart">
                <CartTable />

                <CartCheckout />
            </section>

            <Given />
        </>
    )
}