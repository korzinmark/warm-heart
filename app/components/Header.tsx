import Link from 'next/link'
import { Menu, ShoppingBag, Search } from 'lucide-react'

export default function Header() {
    return (
        <header className="relative p-5 flex justify-between items-center">
            <Menu />

            <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-2xl font-semibold uppercase">
                <span className="sm:hidden">wh</span>
                <span className="hidden sm:inline">warm heart</span>
            </Link>

            <div className="flex gap-8 lg:gap-12">
                <div className="flex gap-3">
                    <Search className="hidden md:block" />
                    <span className="hidden lg:inline">Search</span>
                </div>

                <div className="flex gap-1">
                    <ShoppingBag />
                    (0)
                </div>
            </div>
        </header>
    )
}
