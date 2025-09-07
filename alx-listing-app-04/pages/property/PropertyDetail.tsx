import React from "react";

interface PropertyDetailProps {
    property: {
        id: string;
        title: string;
        description: string;
        price: number;
        location: string;
        image?: string;

    };
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
    return (
        <div className="max-w-3xl mx-auto p-6">
            {property.image && (
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover rounded-2xl mb-6"
                />
            )}
            <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
            <p className="text-gray-600 mb-4">{property.location}</p>
            <p className="text-lg font-semibold mb-4">${property.price}</p>
            <p className="text-gray-700">{property.description}</p>
        </div>
    );
};

export default PropertyDetail;
