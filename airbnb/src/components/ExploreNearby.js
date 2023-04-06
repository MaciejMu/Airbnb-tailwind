import Image from "next/image";

const places = async () => {
  const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const places = await res.json();
  return places;
};

export const ExploreNearby = async () => {
  const nearby = await places();
  return (
    <>
      <h2 className="text-4xl py-5">Explore Nearby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {nearby.map((i) => (
          <div
            key={i.img}
            className="flex items-center m-2 mt-5 space-x-5 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out"
          >
            <div className="relative h-16 w-16">
              <Image fill alt="" src={i.img} className="rounded-lg" />
            </div>
            <div>
              <h1>{i.location}</h1>
              <p className="text-gray-500">{i.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
