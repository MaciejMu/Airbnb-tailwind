import Image from "next/image";

const Baner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        fill
        style={{ objectFit: "cover" }}
        src={
          "https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
        }
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-xl text-gray-600">
          Not sure were to go? Perfect
        </p>
        <button className="bg-white text-red-400 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Baner;
