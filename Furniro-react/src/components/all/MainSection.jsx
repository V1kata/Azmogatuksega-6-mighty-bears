export function MainSection({ text }) {
    return (
        <section className="reusable-main-section">
            <img src="/catalogSvg.svg" alt="" />
                <div className="catalog-sec-text">
                    <h1>{text}</h1>
                    <div className="mini-text">
                        <p>Home</p>
                        <img src="/catalogArrow.svg" alt="" />
                            <p>{text}</p>
                    </div>
                </div>
        </section>
    )
}