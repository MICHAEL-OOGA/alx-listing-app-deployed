// components/property/PropertyCard.tsx
interface Property {
    id: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
}

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="border rounded-lg shadow p-4">
            <img
                src={property.imageUrl}
                alt={property.title}
                className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2">{property.title}</h2>
            <p className="text-sm text-gray-600">{property.description}</p>
            <p className="text-blue-600 font-bold mt-2">${property.price}</p>
        </div>
    );
}
