import { MainSection } from "../all/MainSection"

export function Blog() {
    return (
        <>
            <MainSection text={'Blog'} />

            <section class="blog-content">
                <div class="container-blog">
                    <div class="blog-posts">
                        <article class="post">
                            <img src="assets/Rectangle 68.svg" alt="Millennial Design" />
                            <div class="post-info">
                                <div class="icon-row">
                                    <img class="icon" src="assets/Vector (2).svg" alt="Admin Icon" />
                                    <span style="font-size: 0.8em;">Admin</span>
                                    <img class="icon" src="assets/Vector (3).svg" alt="Calendar Icon" />
                                    <span style="font-size: 0.8em;">14 Oct 2022</span>
                                    <img class="icon" src="assets/Vector (4).svg" />
                                    <span style="font-size: 0.8em;">Wood</span>
                                </div>
                                <h3>Going all-in with millennial design</h3>
                                <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut
                                    labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In
                                    nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi
                                    tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at
                                    erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper
                                    dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                                <a class="read" href="#">Read more</a>
                            </div>
                        </article>

                        <article class="post">
                            <img src="assets/Rectangle 68 (1).svg" alt="New Ways of Decorating" />
                            <div class="post-info">
                                <div class="icon-row">
                                    <img class="icon" src="assets/Vector (2).svg" alt="Admin Icon" />
                                    <span style="font-size: 0.8em;">Admin</span>
                                    <img class="icon" src="assets/Vector (3).svg" alt="Calendar Icon" />
                                    <span style="font-size: 0.8em;">14 Oct 2022</span>
                                    <img class="icon" src="assets/Vector (4).svg" alt="Tag Icon" />
                                    <span style="font-size: 0.8em;">Handmade</span>
                                </div>
                                <h3>Exploring new ways of decorating</h3>
                                <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut
                                    labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In
                                    nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi
                                    tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at
                                    erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper
                                    dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                                <a class="read" href="#">Read more</a>
                            </div>
                            <img src="assets/Rectangle 68 (2).svg" alt="New Ways of Decorating" />
                            <div class="post-info">
                                <div class="icon-row">
                                    <img class="icon" src="assets/Vector (2).svg" alt="Admin Icon" />
                                    <span style="font-size: 0.8em;">Admin</span>
                                    <img class="icon" src="assets/Vector (3).svg" alt="Calendar Icon" />
                                    <span style="font-size: 0.8em;">14 Oct 2022</span>
                                    <img class="icon" src="assets/Vector (4).svg" alt="Tag Icon" />
                                    <span style="font-size: 0.8em;">Wood</span>
                                </div>
                                <h3>Exploring new ways of decorating</h3>
                                <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut
                                    labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In
                                    nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi
                                    tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at
                                    erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper
                                    dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                                <section class="read-btn">
                                    <a class="read" href="#">Read more</a>
                                </section>
                            </div>
                        </article>
                    </div>

                    <aside class="sidebar">
                        <div class="s01">
                            <div class="s02">
                                <input type="text" placeholder="" />
                                    <img style="position: absolute; transform: translateX(270px); cursor: pointer;" src="assets/akar-icons_search.svg" />

                            </div>

                            <div class="s03">
                                <h3 class="s04">Categories</h3>
                                <ul class="s05">
                                    <li class="s06"><span>Crafts</span><span>2</span></li>
                                    <li class="s06"><span>Design</span><span>8</span></li>
                                    <li class="s06"><span>Handmade</span><span>7</span></li>
                                    <li class="s06"><span>Interior</span><span>1</span></li>
                                    <li class="s06"><span>Wood</span><span>6</span></li>
                                </ul>
                            </div>

                            <div class="s07">
                                <h3 class="s04">Recent Posts</h3>
                                <div class="s08">
                                    <img src="assets/Rectangle 69.svg" alt="Post 1" class="s09" />
                                    <div class="s10">
                                        <h4 class="s11">Going all-in with millennial design</h4>
                                        <span class="s12">03 Aug 2022</span>
                                    </div>
                                </div>
                                <div class="s08">
                                    <img src="assets/Rectangle 69 (1).svg" alt="Post 2" class="s09" />
                                    <div class="s10">
                                        <h4 class="s11">Exploring new ways of decorating</h4>
                                        <span class="s12">03 Aug 2022</span>
                                    </div>
                                </div>
                                <div class="s08">
                                    <img src="assets/Rectangle 69 (2).svg" alt="Post 3" class="s09" />
                                    <div class="s10">
                                        <h4 class="s11">Handmade pieces that took time to make</h4>
                                        <span class="s12">03 Aug 2022</span>
                                    </div>
                                </div>
                                <div class="s08">
                                    <img src="assets/Rectangle 69 (3).svg" alt="Post 4" class="s09" />
                                    <div class="s10">
                                        <h4 class="s11">Modern home in Milan</h4>
                                        <span class="s12">03 Aug 2022</span>
                                    </div>
                                </div>
                                <div class="s08">
                                    <img src="assets/Rectangle 69 (4).svg" alt="Post 5" class="s09" />
                                    <div class="s10">
                                        <h4 class="s11">Colorful office redesign</h4>
                                        <span class="s12">03 Aug 2022</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    )
}