import { Link } from "react-router-dom";

export function DetailsNavigation({ text }) {
    return (
        <section class="path">
            <section class="left-path">
                <Link class="path-links" to='/'>Home</Link>
                <img class="path-arrow" src="/catalogArrow.svg" />
                <Link class="path-links" to='/catalog'>Shop</Link>
                <img class="path-arrow" src="/catalogArrow.svg" />
                <p class="Product-name">{text}</p>
            </section>
        </section>
    )
}