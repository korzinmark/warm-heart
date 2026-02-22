import Link from 'next/link'
import { Menu, ShoppingBag, Search } from 'lucide-react'

export default function Header() {
    return (
        <header>
            <div className="container mx-auto p-5 lg:py-7">
                <div className="grid grid-cols-3 items-center">
                    <div className="flex items-center gap-3">
                        <button type="button" className="xl:hidden p-2" aria-label="Open menu">
                            <Menu />
                        </button>

                        <nav aria-label="Primary" className="hidden xl:flex gap-12">
                            <Link href="/shop" className="hover:underline">
                                Shop
                            </Link>
                            <Link href="/about" className="hover:underline">
                                About us
                            </Link>
                            <Link href="/contacts" className="hover:underline">
                                Contacts
                            </Link>
                        </nav>
                    </div>

                    <Link href="/" className="justify-self-center text-2xl font-semibold uppercase">
                        <span className="sm:hidden">wh</span>
                        <span className="hidden sm:inline md:text-3xl">warm heart</span>
                    </Link>

                    <div className="flex justify-self-end gap-8 lg:gap-12">
                        <button
                            type="button"
                            className="flex gap-3 p-2 rounded-md hover:bg-black/5 cursor-pointer"
                            aria-label="Search"
                        >
                            <Search className="hidden md:block" />
                            <span className="hidden lg:inline">Search</span>
                        </button>

                        <Link href="/cart" className="flex gap-2 rounded-md p-2 hover:bg-black/5">
                            <ShoppingBag />
                            <span className="font-medium">(0)</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
