import Image from 'next/image'
import Link from 'next/link'

const INSTAGRAM_URL = 'https://www.instagram.com/'
const INSTAGRAM_HANDLE = '@warm.heart'
const DESCRIPTION_TEXT =
    'On our Instagram, we regularly share the most interesting news. We also tell you about all our new products.'

const InstagramLink = ({ className }: { className?: string }) => (
    <Link href={INSTAGRAM_URL} className={className}>
        {INSTAGRAM_HANDLE}
    </Link>
)

const Description = ({ className }: { className?: string }) => (
    <p className={className}>{DESCRIPTION_TEXT}</p>
)

export default function Home() {
    return (
        <>
            <section className="bg-beige relative">
                <div className="md:flex">
                    <div className="container mx-auto px-5 pt-17 pb-22 sm:px-0 md:pt-22 md:pb-30 xl:pt-45.25 xl:pb-52.75">
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
                <div className="container mx-auto px-5 py-17.5 sm:px-0">
                    <h2 className="text-4xl font-semibold">Popular products</h2>

                    <div className="flex justify-center gap-5">
                        <article className="mt-10 flex justify-center">
                            <Link href="/product/gerhild">
                                <Image
                                    src="/pop-plaid-beige.png"
                                    alt="Gerhild beige plaid 130x170 cm"
                                    width={1090}
                                    height={1049}
                                    className="bg-beige w-80 rounded-3xl p-10 sm:w-52.5 sm:p-7 md:w-93.5 md:p-12.5 lg:w-82 xl:w-103 2xl:w-92.25"
                                />

                                <h3 className="mt-2.5 text-xl font-medium md:text-2xl">Gerhild</h3>

                                <div className="flex justify-between md:text-xl">
                                    <p>130x170 cm</p>

                                    <p>€90</p>
                                </div>
                            </Link>
                        </article>

                        <article className="mt-10 hidden justify-center sm:flex">
                            <Link href="/product/gerhild">
                                <Image
                                    src="/pop-plaid-grey.png"
                                    alt="Gultall gray plaid 130x170 cm"
                                    width={1090}
                                    height={1049}
                                    className="bg-beige w-52.5 rounded-3xl p-7 md:w-93.5 md:p-12.5 lg:w-82 xl:w-103 2xl:w-92.25"
                                />

                                <h3 className="mt-2.5 text-xl font-medium md:text-2xl">Gultall</h3>

                                <div className="flex justify-between md:text-xl">
                                    <p>130x170 cm</p>

                                    <p>€180</p>
                                </div>
                            </Link>
                        </article>

                        <article className="mt-10 hidden justify-center lg:flex">
                            <Link href="/product/gerhild">
                                <Image
                                    src="/pop-plaid-brown.png"
                                    alt="Rovaror brown plaid 150x200 cm"
                                    width={1008}
                                    height={965}
                                    className="bg-beige w-52.5 rounded-3xl p-7 md:w-88.5 md:p-12.5 lg:w-82 xl:w-103 2xl:w-92.25"
                                />

                                <h3 className="mt-2.5 text-xl font-medium md:text-2xl">Rovaror</h3>

                                <div className="flex justify-between md:text-xl">
                                    <p>150x200 cm</p>

                                    <p>€85</p>
                                </div>
                            </Link>
                        </article>

                        <article className="mt-10 hidden justify-center 2xl:flex">
                            <Link href="/product/ludmalla">
                                <Image
                                    src="/luddmalla.png"
                                    alt="Ludmalla grown plaid 130x170 cm"
                                    width={1008}
                                    height={965}
                                    className="bg-beige w-52.5 rounded-3xl p-7 md:w-88.5 md:p-12.5 lg:w-82 xl:w-103 2xl:w-92.25"
                                />

                                <h3 className="mt-2.5 text-xl font-medium md:text-2xl">Ludmalla</h3>

                                <div className="flex justify-between md:text-xl">
                                    <p>130x170 cm</p>

                                    <p>€95</p>
                                </div>
                            </Link>
                        </article>
                    </div>
                </div>
            </section>

            <section className="bg-black">
                <div className="container mx-auto px-5 pt-17.5 pb-22.5 text-white sm:px-0 md:pt-22.5 md:pb-30 lg:pb-16.5 xl:py-37.5">
                    <div className="xl:flex xl:items-center xl:gap-7.75 2xl:justify-between">
                        <div className="xl:w-87.5">
                            <h2 className="text-4xl/12 font-semibold md:text-5xl/15 md:font-medium">
                                Create comfort <br className="sm:hidden" /> in home
                            </h2>

                            <p className="mt-5 md:mt-7.5 md:text-xl">
                                A blanket is a simple and versatile thing that can make relaxing
                                after a hard day's work much more comfortable.
                            </p>
                        </div>

                        <div className="mt-10 flex flex-col gap-10 md:mt-12.5 md:flex-row lg:gap-13.75 xl:mt-0 2xl:contents">
                            <Image
                                alt="Sideneert brown blanket"
                                src="/sideneert.png"
                                width={977}
                                height={922}
                                className="w-76.75 sm:w-85.5 md:mt-8 md:w-74.25 lg:mt-0 lg:w-94.5 2xl:shrink-0"
                            />

                            <div className="xl:w-95.5">
                                <h3 className="text-3xl font-semibold md:text-4xl md:font-medium">
                                    Sideneert
                                </h3>

                                <div className="mt-5 md:mt-7.5 md:text-xl">
                                    <p>
                                        It is made from soft New Zealand wool, which is naturally
                                        stain-repellent.
                                    </p>
                                    <p className="mt-4 md:mt-5">
                                        This bedspread is an easy way to freshen up your bedroom
                                        decor. Plus, it can be used as an extra blanket if you get
                                        cold.
                                    </p>
                                </div>

                                <Link
                                    href="/shop"
                                    className="mt-8.75 inline-block rounded-full bg-white px-22.5 py-3.25 font-medium text-black md:mt-11.25 md:px-20 md:text-xl"
                                >
                                    Go to shop
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-beige relative px-5 pt-17.5 pb-22.5 sm:px-0 md:pt-25 md:pb-30 xl:pt-32.5 xl:pb-37.5">
                <div className="container mx-auto text-center">
                    <div className="absolute -top-12 left-1/2 flex h-25 w-25 -translate-x-1/2 items-center justify-center rounded-full border-3 border-black bg-white md:-top-19 md:h-37.5 md:w-37.5 md:border-4">
                        <Image
                            alt="leaf"
                            src="/leaf.svg"
                            width={56}
                            height={61}
                            className="md:h-24 md:w-22"
                        />
                    </div>

                    <h2 className="text-4xl/12 font-semibold md:text-5xl">
                        We use eco-friendly materials
                    </h2>

                    <p className="mx-auto mt-5 md:mt-7.5 md:text-xl lg:max-w-200.5">
                        We always care about the environment. Therefore we use only environmentally
                        friendly and recyclable materials in our production. Our blankets help to
                        warm up on cold evenings, and also make your home even more cozy.
                    </p>
                </div>
            </section>

            <section className="bg-white">
                <div className="container mx-auto px-5 pt-17.5 pb-22.5 sm:px-0 md:pt-22.5 md:pb-27.5 lg:pb-25 xl:pt-32.5 xl:pb-37.5">
                    <h2 className="text-4xl/12 font-semibold md:text-5xl">
                        Follow us on <br className="sm:hidden" /> Instagram
                    </h2>

                    <div className="mt-10 flex gap-5 md:mt-12.5 xl:mt-15">
                        <div className="md:h-93.5 md:w-93.5 lg:h-82 lg:w-82 xl:h-101 xl:w-101 2xl:h-121 2xl:w-121">
                            <Image
                                alt="Red plaid on the bed"
                                width={958}
                                height={958}
                                src="/red-plaid.jpg"
                                className="rounded-3xl"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />

                            <Description className="mt-4 hidden text-xl md:block" />
                        </div>

                        <div className="hidden md:block md:w-93.5 lg:h-105.5 lg:w-105.5 xl:h-129 xl:w-129 2xl:h-149 2xl:w-149">
                            <Image
                                alt="Beige plain on the sofa"
                                width={1000}
                                height={1000}
                                src="/sofa-plaid.jpg"
                                className="rounded-3xl"
                                sizes="(max-width: 1024px) 50vw, 33vw"
                            />

                            <InstagramLink className="mt-4 block text-4xl lg:hidden" />
                        </div>

                        <div className="hidden lg:block lg:h-56.5 lg:w-56.5 xl:h-79 xl:w-79 2xl:h-103 2xl:w-103">
                            <Image
                                alt="Warm beige plaid"
                                width={660}
                                height={660}
                                src="/warm-plaid.jpg"
                                className="rounded-3xl"
                                sizes="33vw"
                            />

                            <InstagramLink className="mt-4 block text-4xl" />
                        </div>
                    </div>

                    <InstagramLink className="mt-4 block text-3xl md:hidden" />
                    <Description className="mt-3 md:hidden" />
                </div>
            </section>

            <section className="bg-beige">
                <div className="container mx-auto px-5 pt-17.5 pb-22.5 sm:px-0 md:pt-22.5 md:pb-30 lg:flex lg:justify-between">
                    <div className="lg:max-w-117.5">
                        <h2 className="text-3xl/11 font-semibold sm:text-4xl/12 md:text-5xl/16">
                            Get 20% off <br className="md:hidden" /> your first purchase
                        </h2>

                        <p className="mt-5 sm:max-w-125 md:mt-7.5 md:max-w-182 md:text-xl">
                            Subscribe to our newsletter and get a promo code for a 20% discount! You
                            will receive only the most important and relevant news.
                        </p>
                    </div>

                    <form action="" className="mt-10 md:mt-12.5 md:text-xl">
                        <input
                            required
                            autoComplete="off"
                            name="email"
                            className="rounded-lmd block w-full border-b-3 border-black pb-3 sm:max-w-80"
                            type="email"
                            placeholder="Email address"
                        />

                        <button className="mt-10 rounded-full bg-black px-20 py-3.25 text-white md:mt-11.25">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}
