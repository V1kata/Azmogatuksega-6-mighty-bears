import { Link } from "react-router-dom"

export function NavBar() {
    return (
        <header>
            <img src="/logoIcon.svg" alt="furniroIcon" />
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/catalog">Shop</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <div className="nav-icons">
                    <ul>
                        <li><Link to="/blog"><img src="/profile.svg" alt="" /></Link></li>
                        <li><Link to="/"><img src="/loop.svg" alt="" /></Link></li>
                        <li><Link to="/"><img src="/heart.svg" alt="" /></Link></li>
                        <li><Link to="/cart"><img src="/cart.svg" alt="" /></Link></li>
                    </ul>
                </div>
        </header>
    )
}