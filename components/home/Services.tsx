import CardServices from "@/elements/CardServices";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="bg-">
      <div className="container">
        <h1 className="text-secondary2 text-4xl  text-center font-bold pt-4">
          Services
        </h1>
        <h2 className="text-center  text-secondary4 pb-4  capitalize font-bold ">
          Experience hassle-free shopping and unparalleled customer service with
          our commitment to delivering excellence in every aspect of our
          services
        </h2>
        <div className="grid grid-cols-1 gap-1  md:grid-cols-3">
          {services.map((service: any, index: number) => (
            <div className="p-4 " key={index}>
              <CardServices
                img_src={service.img_src}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
