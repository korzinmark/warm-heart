import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <section className="bg-beige relative">
                <div className="md:flex">
                    <div className="container mx-auto px-5 pt-17 pb-22 md:pt-22 md:pb-30 xl:pt-45.25 xl:pb-52.75">
                        <h1 className="text-left text-4xl/12 font-semibold sm:text-5xl/15 md:text-6xl/19">
                            Soft plaids <br /> for your comfort
                        </h1>

                        <p className="mt-5 max-w-115 md:mt-7.5 md:text-xl">
                            Throw a blanket over your shoulders or place it on the arm of the sofa,
                            and the atmosphere in the house will be warmer.
                        </p>

                        <button className="mt-9 rounded-full bg-black px-20 py-3 text-white">
                            Shop now
                        </button>
                    </div>

                    <div className="absolute bottom-40 left-1/2 z-1 -translate-x-1/2 sm:right-25 sm:bottom-41 sm:left-auto sm:translate-x-0 md:right-55 md:-bottom-14 lg:top-30 lg:right-35 lg:before:absolute lg:before:-top-11 lg:before:left-1 lg:before:h-40 lg:before:w-30 lg:before:bg-[url('/top.svg')] lg:before:bg-no-repeat lg:before:content-[''] lg:after:absolute lg:after:-right-5 lg:after:bottom-20 lg:after:h-40 lg:after:w-30 lg:after:bg-[url('/down.svg')] lg:after:bg-no-repeat lg:after:content-[''] xl:top-40 xl:right-80 xl:before:left-5 xl:after:bottom-33 2xl:right-1/2 2xl:translate-x-100">
                        <Image
                            preload
                            src="/promo-plaid.png"
                            width={467}
                            height={455}
                            alt="plaid"
                            className="h-auto w-45 md:w-62.75 lg:w-78 xl:w-101.25"
                        />
                    </div>

                    <div className="min-h-72 bg-black bg-[url(/promo-bg.png)] sm:min-h-59 md:absolute md:right-0 md:h-full md:min-w-1/3 lg:min-w-[23%] xl:min-w-[35%] 2xl:min-w-[40%]"></div>
                </div>
            </section>

            <section>
                <div className="container mx-auto px-5 py-17.5">
                    <h2 className="text-4xl font-semibold">Popular products</h2>

                    <div className="flex justify-center gap-5">
                        <article className="mt-10 flex justify-center">
                            <Link href="/product/gerhild">
                                <Image
                                    src="/pop-plaid-beige.png"
                                    alt="Gerhild beige plaid 130x170 cm"
                                    width={1090}
                                    height={1049}
                                    className="bg-beige h-80 w-80 rounded-3xl p-10 sm:h-52.5 sm:w-52.5 sm:p-7"
                                />

                                <h3 className="mt-2.5 text-xl font-medium">Gerhild</h3>

                                <div className="flex justify-between">
                                    <p>130x170 cm</p>

                                    <p>€90</p>
                                </div>
                            </Link>
                        </article>

                        <article className="mt-10 hidden justify-center sm:flex">
                            <Link href="/product/gerhild">
                                <Image
                                    src="/pop-plaid-gray.png"
                                    alt="Gultall gray plaid 130x170 cm"
                                    width={1090}
                                    height={1049}
                                    className="bg-beige h-52.5 w-52.5 rounded-3xl p-7"
                                />

                                <h3 className="mt-2.5 text-xl font-medium">Gultall</h3>

                                <div className="flex justify-between">
                                    <p>130x170 cm</p>

                                    <p>€180</p>
                                </div>
                            </Link>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}
