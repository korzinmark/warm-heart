import Image from 'next/image'

export default function Home() {
    return (
        <>
            <section className="relative bg-beige">
                <div className="md:flex">
                    <div className="container mx-auto px-5 pt-17 pb-22 md:pt-22 md:pb-30">
                        <h1 className="text-4xl/12 sm:text-5xl/15 font-semibold text-left md:text-6xl/19">
                            Soft plaids <br /> for your comfort
                        </h1>

                        <p className="mt-5 max-w-115 md:mt-7.5 md:text-xl">
                            Throw a blanket over your shoulders or place it on the arm of the sofa,
                            and the atmosphere in the house will be warmer.
                        </p>

                        <button className="mt-9 bg-black text-white py-3 px-20 rounded-full">
                            Shop now
                        </button>
                    </div>

                    <div
                        className="absolute left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-25
                                bottom-40 sm:bottom-41 z-1
                                md:-bottom-14 md:right-55
                                lg:right-35 lg:top-30
                                lg:before:content-['']
                                lg:before:absolute
                                lg:before:-top-11
                                lg:before:left-1
                                lg:before:w-full
                                lg:before:h-40
                                lg:before:bg-[url('/top.svg')]
                                lg:before:bg-no-repeat

                                lg:after:content-['']
                                lg:after:absolute
                                lg:after:bottom-20
                                lg:after:-right-54
                                lg:after:w-full
                                lg:after:h-40
                                lg:after:bg-[url('/down.svg')]
                                lg:after:bg-no-repeat
                                "
                    >
                        <Image
                            loading="eager"
                            src="/promo-plaid.png"
                            width={467}
                            height={455}
                            alt="plaid"
                            className="w-45 md:w-62.75 lg:w-78 h-auto"
                        />
                    </div>

                    <div className="min-h-72 sm:min-h-59 md:min-w-1/3 lg:min-w-[23%] md:h-full md:absolute md:right-0 bg-black bg-[url(/promo-bg.png)]"></div>
                </div>
            </section>
        </>
    )
}
