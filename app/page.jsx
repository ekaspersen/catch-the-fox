import Link from "next/link";
import Contact from "./components/contact";
import ArtistContainer from "./components/artistCard";
export default function Home() {
    return (
        <main>
            <section className="grid place-items-center h-fit min-h-screen bg-hero-image md:bg-hero-image-big bg-cover bg-bottom">
                <div className="flex flex-col font-black text-4xl md:text-5xl">
                    <h1>CATCH THE FOX</h1>
                    <span className="relative">
                        CATCH THE FOX
                        <span className="absolute top-0 left-0 italic text-clrprimary">
                            CATCH THE FOX
                        </span>
                    </span>
                    <span>CATCH THE FOX</span>
                    <span>CATCH THE FOX</span>
                    <span className="text-xs mx-auto opacity-60 mt-8">
                        SCROLL ON !
                    </span>
                </div>
                <div className="max-w-[800px] w-full fixed bottom-[-20px] right-0 bg-clrprimary pt-2 lg:pb-2 px-2 z-50">
                    <iframe
                        src="https://open.spotify.com/embed/track/7hcpf4fgMXaUKoSzgnJzfL?utm_source=generator&theme=0"
                        width="100%"
                        height="100"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>
            </section>

            <section className="min-h-screen lg:h-screen flex flex-col lg:flex-row-reverse lg:justify-center max-w-7xl mx-auto">
                <div className="flex flex-col items-center gap-8 px-8 py-16 text-center">
                    <div className="flex-col">
                        <h2 className="font-black text-5xl text-clrprimary">
                            MERCH SHOP
                        </h2>
                        <span className="font-black text-2xl">
                            CATCH THE FOX
                        </span>
                    </div>
                    <p className="font-bold text-xs max-w-[326px] sm:max-w-none">
                        Støtt Catch the fox gjennom merch-shoppen vår. <br />
                        Det er ikke smart å vente for lenge! Når lageret er tomt
                        er lageret tomt.
                    </p>
                    <span className="font-black opacity-60">
                        Forrige batch gikk på en dag!
                    </span>
                    <Link
                        href="/shop"
                        className="bg-clrprimary px-8 py-4 relative max-w-fit"
                    >
                        SE UTVALG
                        <div className="absolute bg-clrtertiary top-[6px] left-[6px] right-[-6px] bottom-[-6px] z-[-1]"></div>
                    </Link>
                </div>
                <div className="flex flex-col lg:flex-col-reverse h-full">
                    <div className="flex lg:flex-1">
                        <div className="flex-1 bg-clrprimary grid place-items-center py-8">
                            <img
                                className="max-w-[80%]"
                                src="./ctf-graphic-shop.png"
                                alt="graphic ctf"
                            />
                        </div>
                        <div className="flex-1 grid place-items-center">
                            <img
                                className="max-w-[80%]"
                                src="./t-preview.png"
                                alt="t-preview-img"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-1 justify-center items-center p-4 pt-16 text-right font-black italic text-3xl lg:text-5xl bg-clrprimary">
                        <span>CATCH THE FOX</span>
                        <span>LIMITED OFFER</span>
                        <span>CATCH THE FOX</span>
                        <span>LIMITED OFFER</span>
                        <span>CATCH THE FOX</span>
                    </div>
                </div>
            </section>
            <section>
                <div className="">
                    <div className="bg-clrprimary flex flex-col gap-8 md:gap-16 px-4 py-16 max-w-7xl mx-auto">
                        <h2 className="font-black text-4xl md:text-5xl">
                            ABOUT US
                        </h2>

                        <div className="flex flex-col gap-4 text-clrdark font-medium lg:text-xl max-w-3xl">
                            <p className="font-bold text-clrwhite">
                                Introducing Catch the Fox, the sensational rock
                                band from Northern Norway. Born in 2022, this
                                dynamic group of four musicians is ready to rock
                                your world.
                            </p>
                            <p>
                                With Tommy Jee as the lead vocalist, LP Næss on
                                guitar, Lars Olai With us on bass and guitar,
                                and Niklas Faanes on drums, Catch the Fox brings
                                together a diverse range of musical talents.
                                Their sound is a captivating fusion of styles
                                that will leave you wanting more.
                            </p>
                            <p>
                                From their explosive debut performance at Oslo
                                Cathedral School to their string of successes,
                                Catch the Fox has been making waves in the music
                                scene. Their energetic debut single,
                                &#34;Dancing On The Edge,&#34; is a testament to
                                their collective creativity and passion.
                            </p>
                            <p>
                                Recently crowned winners of the Norwegian final
                                of the Emergenza festival, Catch the Fox is set
                                to represent Norway in the grand international
                                final in Germany. This ambitious band has its
                                sights set on reaching new heights and making a
                                mark on the global stage.
                            </p>
                            <p>
                                Recently crowned winners of the Norwegian final
                                of the Emergenza festival, Catch the Fox is set
                                to represent Norway in the grand international
                                final in Germany. This ambitious band has its
                                sights set on reaching new heights and making a
                                mark on the global stage.
                            </p>
                            <p>
                                With their infectious energy, unwavering
                                passion, and unique sound, Catch the Fox is a
                                standout act in the Norwegian music scene. Keep
                                an eye out for their electrifying performances
                                and join them on their extraordinary journey.
                            </p>
                            <p className="font-bold text-clrwhite">
                                Catch the Fox – the rock band that will ignite
                                your soul and leave you craving more.
                            </p>
                        </div>
                        <ArtistContainer />
                    </div>
                </div>
            </section>
            <Contact />
        </main>
    );
}
