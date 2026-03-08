import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto px-5 pt-17.5 pb-10.25 lg:flex lg:gap-19.75 xl:gap-39.5">
                <div className='flex flex-col sm:flex-row sm:items-center sm:gap-12.5 gap-7.5 lg:flex-col lg:items-start lg:gap-7.5'>
                    <h2 className="text-3xl font-semibold uppercase">warm heart</h2>

                    <div className="flex gap-3.75">
                        <Link
                            href="https://www.instagram.com/"
                            className="h-10 w-10 rounded-full bg-white p-2.5"
                        >
                            <Image alt="Instagram" width={20} height={20} src="/instagram.svg" />
                        </Link>

                        <Link
                            href="https://www.facebook.com/"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-2.5"
                        >
                            <Image alt="Facebook" width={12} height={23} src="/facebook.svg" />
                        </Link>

                        <Link
                            href="https://www.x.com/"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-2.5"
                        >
                            <Image alt="X" width={20} height={20} src="/x.svg" />
                        </Link>
                    </div>

                    <div className="mt-7 gap-5 opacity-30 hidden lg:flex flex-col">
                        <p className="uppercase">© warm heart 2026</p>
                        <Link href="/privacy">Privacy policy</Link>
                    </div>
                </div>

                <div className='flex flex-col gap-10 mt-10 md:flex-row md:gap-31.5 lg:gap-19.75 xl:gap-39.5 lg:mt-0'>
                    <div>
                        <h3 className="text-xl font-semibold">Info</h3>

                        <ul className="mt-3 md:mt-4 lg:mt-6 flex flex-col gap-3 md:gap-4 lg:gap-5">
                            <li>
                                <Link href="/about">About us</Link>
                            </li>
                            <li>
                                <Link href="/contacts">Contacts</Link>
                            </li>
                            <li>
                                <Link href="/shop">Shop</Link>
                            </li>
                            <li>
                                <Link href="/faq">FAQ</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">Customer service</h3>

                        <ul className="mt-3 md:mt-4 lg:mt-6 flex flex-col gap-3 md:gap-4 lg:gap-5">
                            <li>
                                <Link href="/delivery">Delivery and pickup</Link>
                            </li>
                            <li>
                                <Link href="/payment">Payment</Link>
                            </li>
                            <li>
                                <Link href="/exchange-return">Exchange and return</Link>
                            </li>
                            <li>
                                <Link href="/help">Help</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">Useful information</h3>

                        <ul className="mt-3 md:mt-4 lg:mt-6 flex flex-col gap-3 md:gap-4 lg:gap-5">
                            <li>
                                <Link href="/suppliers">Suppliers</Link>
                            </li>
                            <li>
                                <Link href="/buying-guides">Buying guides</Link>
                            </li>
                            <li>
                                <Link href="/principle-of-operation">Principle of operation</Link>
                            </li>
                            <li>
                                <Link href="/press-service">Press service</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex gap-6.5 opacity-30 sm:gap-10 md:gap-12.5 lg:hidden">
                    <p className="uppercase">© warm heart 2026</p>
                    <Link href="/privacy">Privacy policy</Link>
                </div>
            </div>
        </footer>
    )
}
