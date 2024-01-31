import Hero from '../components/layout/Hero'
import HomeMenu from '../components/layout/HomeMenu'
import SectionHeaders from '../components/layout/SectionHeaders'
export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro animi sequi saepe quasi? Eos debitis libero rerum et quod, pariatur ducimus nisi a qui est id minima iste nihil repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nisi tempore animi tenetur eligendi facilis perferendis. Incidunt, id eligendi consectetur corrupti fugit, dignissimos possimus quas error animi, aspernatur vitae et.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora voluptatum minus saepe veritatis repudiandae, dolore perferendis quae, aperiam quisquam illo exercitationem? Quaerat delectus sit incidunt culpa aperiam, dolor at aliquam.
          </p>

        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'} />
        <div className="mt-8"></div>
        <a className="text-4xl underline text-gray-500" href="tel:+46738123123">+46 738 123 123</a>
      </section>
    </>
  )
}
