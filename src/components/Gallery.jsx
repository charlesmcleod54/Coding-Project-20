import TourCard from './TourCard';

function Gallery({ tours, loading, error, onRemove}) {
    if (loading) return <p>Loading tours...</p>;
    if (error) return <p>{error}</p>;
    if (tours.length === 0) return <p>No tours available</p>;

    return (
        <div className="gallery">
            {tours.map(tour => (
                <TourCard key={tour.id} tour={tour} onRemove={onRemove} />
            ))}
        </div>
    );
}

export default Gallery;
