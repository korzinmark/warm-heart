import { supabase } from '../lib/supabaseClient'
import Link from 'next/link'
import Image from 'next/image'

export default async function Page() {
    const { data: products } = await supabase.from('products').select('*')

    return (
        <>
            <section className="bg-beige">
                <div className="container mx-auto flex flex-col gap-2.5 px-5 pt-6.25 pb-10 md:flex-row md:gap-12.5 md:pt-9 xl:pt-13 xl:pb-15">
                    <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl">Shop</h1>

                    <p className="md:mt-0.5 md:text-xl">
                        In our store you will find a large number of high-quality blankets{' '}
                        <br className="hidden lg:block" /> that will help make your home more
                        comfortable and warm your life.
                    </p>
                </div>
            </section>

            <section>
                <div className="container mx-auto px-5 py-10">
                    <div className="flex flex-wrap justify-center gap-5">
                        {products?.map(p => (
                            <article key={p.id} className="flex justify-center">
                                <Link href={`/product${p.link_url}`}>
                                    <Image
                                        loading="eager"
                                        src={p.image_url}
                                        alt={p.alt}
                                        width={1090}
                                        height={1049}
                                        className="bg-beige w-80 rounded-3xl p-10 sm:w-52.5 sm:p-7 md:w-93.5 md:p-12.5 lg:w-82 xl:w-103 2xl:w-92.25"
                                    />

                                    <h3 className="mt-2.5 text-xl font-medium md:text-2xl">
                                        {p.name}
                                    </h3>

                                    <div className="flex justify-between md:text-xl">
                                        <p>{p.size}</p>

                                        <p>€{p.price}</p>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
