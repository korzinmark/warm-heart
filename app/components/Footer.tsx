import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto px-5 pt-17.5 pb-10.25">
                <h2 className="text-3xl uppercase font-semibold">warm heart</h2>

                <div className="mt-7.5 flex gap-3.75">
                    <Link href="https://www.instagram.com/" className="bg-white w-10 h-10 p-2.5 rounded-full">
                        <Image alt="Instagram" width={20} height={20} src="/instagram.svg" />
                    </Link>

                    <Link href="https://www.facebook.com/" className="bg-white w-10 h-10 p-2.5 rounded-full flex justify-center items-center">
                        <Image alt="Facebook" width={12} height={23} src="/facebook.svg" />
                    </Link>

                    <Link href="https://www.x.com/" className="bg-white w-10 h-10 p-2.5 rounded-full flex justify-center items-center">
                        <Image alt="X" width={20} height={20} src="/x.svg" />
                    </Link>
                </div>

                <div className="py-100"></div>
            </div>
        </footer>
    )
}