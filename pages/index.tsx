import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Free WiFi",
  "Pet Friendly",
  "Private Pool",
  "City Center",
];

const Home = () => {
  return (
    <div className="px-6 md:px-20">
      {/* Hero Section */}
      <section className="bg-[url('https://source.unsplash.com/featured/?vacation')] bg-cover bg-center h-[300px] flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-3xl font-bold mb-2 text-red-800">
          Find your favorite place here!
        </h1>
        <p className="text-lg text-red-800">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filter Pills */}
      <section className="my-6 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <span
            key={filter}
            className="bg-gray-200 px-4 py-1 rounded-full text-sm hover:bg-gray-300 cursor-pointer"
          >
            {filter}
          </span>
        ))}
      </section>

      {/* Listings */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={property.image}
              alt={property.name}
              className="h-52 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{property.name}</h3>
              <p className="text-gray-600">
                {property.address.city}, {property.address.country}
              </p>
              <p className="text-yellow-500 font-bold">⭐ {property.rating}</p>
              <p className="text-blue-500 font-bold mt-2">
                ${property.price} / night
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
