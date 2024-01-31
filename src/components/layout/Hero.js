import Image from 'next/image'
import Right from '../icons/Right'

export default function Hero() {
    return (
        <section className="hero mt-4">
            <div className="py-12">
                <h1 className="text-4xl font-semibold">EveryThing<br /> is better<br /> with a <span className="text-primary">Pizza</span></h1>
                <p className="my-4 text-gray-500 text-sm">Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life</p>
                <div className="flex gap-4 text-sm">
                    <button className="bg-primary uppercase flex justify-center items-center gap-2 text-white px-4 py-2 rounded-full">
                        Order now
                        <Right />
                    </button>
                    <button className="flex justify-center items-center border-0 gap-2 text-gray-600 font-semibold px-4 py-2 rounded-full">
                        Learn more
                        < Right />
                    </button>
                </div>
            </div>

            <div className="relative">
                <Image className="heroPizza"
                    src={'/pizza.png'}
                    alt={'pizza'}
                    fill={true}
                    priority={true}
                    sizes="(width: 100%), (height: 100%)"
                />
            </div>
        </section>
    )
}