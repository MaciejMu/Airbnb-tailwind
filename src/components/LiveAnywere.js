import Image from "next/image";

const data = async () => {
  const res = await fetch("https://www.jsonkeeper.com/b/VHHT");
  const data = await res.json();
  return data;
};

export const LiveAnywere = async () => {
  const places = await data();
  return (
    <>
      <h2 className="text-4xl py-5">Live Anywere</h2>
      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
        {places.map((i) => (
          <div
            key={i.img}
            className=" rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-300 ease-out"
          >
            <div className="relative h-80 w-80">
              <Image fill alt="" src={i.img} className="rounded-xl" />
            </div>
            <h3 className="text-2xl mt-3">{i.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
};
