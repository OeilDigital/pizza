import Image from "next/image"
import MenuItem from '../menu/MenuItem'
import SectionHeaders from './SectionHeaders'

export default function HomeMenu() {

    return (
        <section className="">
            <div className="absolute left-0 right-0 w-full justify-start">
                <div className="absolute left-0 -top-[70px] text-left -z-10">
                    <Image src="/sallad1.png" width={109} height={189} alt={"salad"} />
                </div>
            </div>
            <div className="absolute left-0 right-0 w-full justify-start">
                <div className="absolute -top-[100px] right-0 -z-10">
                    <Image src="/sallad2.png" width={107} height={195} alt={"salad"} />
                </div></div>
            <div className="text-center mb-4">
                <SectionHeaders
                    subHeaders={'check out'}
                    mainHeaders={'menu'} />
                <div className="grid grid-cols-3 gap-4">
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                </div>
            </div>
        </section>
    );
}