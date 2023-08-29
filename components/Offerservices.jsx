import Image from "next/image";
import { originality, price, ontime, quality } from "@/public/assets";

const Offerservices = () => {
  return (
    <div className="container py-12 relative mx-auto px-1 lg:px-8 flex flex-col ">
      <div className="justify-between items-center">
        <h2 className="heading text-center">
          Our Report Writing Help Services Offer You
        </h2>
        <div className="my-10 flex flex-wrap justify-center gap-10">
          <Servicecard
            image={quality}
            content={
              "Our company is a collection of high-tech brains that go over your assignment step by step to ensure that what we deliver to you is the best thing that can be delivered about that assignment."
            }
          />
          <Servicecard
            image={ontime}
            content={
              "We complete your task sooner than expected without sacrificing the assignment's quality. However, we always recommend that you submit your order as quickly as possible to have more time and be on the safe side. We will not only provide you with timely feedback, but we will also provide you with the best research analysis. "
            }
          />
          <Servicecard
            image={price}
            content={
              "We provide our services at very reasonable prices, with numerous flexible packages to choose from. "
            }
          />
          <Servicecard
            image={originality}
            content={
              "We will not only provide you with timely feedback, but we will also provide you with the best research analysis. "
            }
          />
        </div>
      </div>
    </div>
  );
};

const Servicecard = ({ image, content }) => {
  return (
    <div className="w-80">
      <div className="p-2 flex flex-col justify-center items-center">
        <Image
          src={image}
          alt={image}
          width={100}
          height={100}
          className="m-2"
        />
        <p className="text-lg">{content}</p>
      </div>
    </div>
  );
};

export default Offerservices;
