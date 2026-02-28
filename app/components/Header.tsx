import Link from 'next/link'
import { Menu, ShoppingBag, Search } from 'lucide-react'

export default function Header() {
    return (
        <header className="container mx-auto p-5 sm:px-0 lg:py-7">
            <div className="grid grid-cols-3 items-center">
                <div className="flex items-center gap-3">
                    <button type="button" className="p-2 xl:hidden" aria-label="Open menu">
                        <Menu />
                    </button>

                    <nav aria-label="Primary" className="hidden gap-12 xl:flex">
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

                <div className="flex items-center gap-8 justify-self-end lg:gap-12">
                    <button
                        type="button"
                        className="flex cursor-pointer gap-3 rounded-md p-2 hover:bg-black/5"
                        aria-label="Search"
                    >
                        <Search className="hidden md:block" />
                        <span className="hidden lg:inline">Search</span>
                    </button>

                    <Link
                        href="/cart"
                        className="flex items-center gap-2 rounded-md p-2 hover:bg-black/5"
                    >
                        <ShoppingBag />
                        <span className="font-medium">(0)</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}
