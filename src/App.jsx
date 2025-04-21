import { useEffec, useState } from "react";
import Gallery from "./components/Gallery";
import DestinationSelector from "./components/DestinationSelector";
import { useEffect } from "react";

const TOURS_API = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]); // Tours stored in useState
  const [loading, setLoading] = useState(true); // Loading State
  const [error, setError] = useState(null); // Error State
  const [selectedDestination, setSelectedDestination] = useState("All");

  // Fetch and useEffect
  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      try {
        const res = await fetch(TOURS_API);
        const data = await res.json();
        setTours(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch tours");
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const handleRemove = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const filteredTours = selectedDestination === "All"
    ? tours
    : tours.filter(tour => tour.name === selectedDestination);

  const uniqueDestinations = ["All", ...new Set(tours.map(t => t.name))];

  return (
    <div className="App">
      <h1>React Tours</h1>
      <DestinationSelector
        options={uniqueDestinations}
        selected={selectedDestination}
        onChange={setSelectedDestination}
        />

        {/* Task 4 */}
        {tours.length === 0 && !loading && (
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <p>No tours left. Refresh to reload.</p>
            <button onClick={fetchTours}>Refresh</button>
            </div>
        )}
        
        <Gallery
          tours={filteredTours}
          loading={loading}
          error={error}
          onRemove={handleRemove}
          />
    </div>
  );
}

export default App;