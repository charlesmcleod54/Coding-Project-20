function TourCard({ tour, onRemove }) {
    const { id, name, info, image, price } = tour;

    return (
        <div className="tour-card">
            <img src={imgage} alt={name} />
            <div className="tour-info">
                <h2>{name}</h2>
                <h4>{price}</h4>
                <p>{info}</p>
                <button onClick={() => onRemove(id)}>Not Interested</button>
            </div>
        </div>
    );
}

export default TourCard;
