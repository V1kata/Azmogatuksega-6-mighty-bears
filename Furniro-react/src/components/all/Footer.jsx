export function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="branding">
                    <h1>Furniro.</h1>
                    <div>
                        <p className="grey">420 University Drive Suite 200 Coral Gables,</p>
                        <p className="grey">FL 33134 USA</p>
                    </div>
                </div>
                <div className="links">
                    <h4 className="grey">Links</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="help">
                    <h4 className="grey">Help</h4>
                    <ul>
                        <li><a href="#">Payment Options</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Privacy Policies</a></li>
                    </ul>
                </div>
                <div className="newsletter">
                    <h4 className="grey">Newsletter</h4>
                    <div className="form">
                        <input type="email" placeholder="Enter Your Email Address" />
                            <button type="submit" className="underline">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className="footer-end">
                <p>2023 furni. All rights reserved.</p>
            </div>
        </footer>
    )
}