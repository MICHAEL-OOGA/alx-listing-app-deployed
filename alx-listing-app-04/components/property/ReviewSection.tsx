import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
    id: string;
    reviewerName: string;
    rating: number;
    comment: string;
    createdAt?: string; // optional if your API provides timestamps
}

interface ReviewSectionProps {
    propertyId: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ propertyId }) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/api/properties/${propertyId}/reviews`);
                setReviews(response.data);
            } catch (err) {
                console.error("Error fetching reviews:", err);
                setError("Failed to load reviews. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        if (propertyId) {
            fetchReviews();
        }
    }, [propertyId]);

    if (loading) {
        return <p>Loading reviews...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    if (reviews.length === 0) {
        return <p>No reviews yet for this property.</p>;
    }

    return (
        <div className="mt-6 space-y-4">
            <h2 className="text-lg font-bold">Reviews</h2>
            {reviews.map((review) => (
                <div
                    key={review.id}
                    className="p-4 border rounded-lg shadow-sm bg-gray-50"
                >
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">{review.reviewerName}</span>
                        <span className="text-yellow-500">
                            {"⭐".repeat(review.rating)}
                        </span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                    {review.createdAt && (
                        <p className="text-xs text-gray-500 mt-2">
                            {new Date(review.createdAt).toLocaleDateString()}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ReviewSection;
