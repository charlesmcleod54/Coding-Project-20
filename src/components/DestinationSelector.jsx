function DestinationSelector({ options, selected, onChange }) {
    return (
        <div className="selector">
            <label htmlFor="destination">Filter by Destination: </label>
            <select
                id="destination"
                value={selected}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt === "All" ? "All Destinations" : opt}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DestinationSelector;
