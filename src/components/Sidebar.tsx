import useSidebarContext from '../context/SideBarContext/sideBarContext';
import type { SidebarProps } from '../interface/sidebar';

const Sidebar = ({
  cars,
  filteredCars,
  selectedCategories,
  setSelectedCategories,
  selectedSeats,
  setSelectedSeats,
  maxPrice,
  setMaxPrice,
}: SidebarProps) => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarContext();

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const handleSeatsChange = (seats: number) => {
    setSelectedSeats(prev =>
      prev.includes(seats) ? prev.filter(s => s !== seats) : [...prev, seats]
    );
  };

  return (
    <>
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:inset-y-0 md:left-0 md:right-auto md:w-96">
          <div
            className="fixed inset-0 bg-black/40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="relative bg-white w-full sm:w-80 md:w-96 h-full shadow-lg p-5 transform transition-transform duration-300">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="mb-4 text-gray-500"
            >
              Close
            </button>

            <h2 className="text-md text-gray-500 mt-10 mb-7">Types</h2>
            <div className="flex gap-5 flex-col">
              {[...new Set(cars.map(car => car.category))].map((category, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  <span>{category}</span>
                  <span className="text-gray-500">({filteredCars.filter(c => c.category === category).length})</span>
                </label>
              ))}
            </div>

            <h2 className="text-md text-gray-500 mt-10 mb-7">Capacity</h2>
            <div className="flex gap-5 flex-col">
              {[...new Set(cars.map(car => car.seats))].map((seats, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedSeats.includes(seats)}
                    onChange={() => handleSeatsChange(seats)}
                  />
                  <span>{seats} Person</span>
                  <span className="text-gray-500">({filteredCars.filter(c => c.seats === seats).length})</span>
                </label>
              ))}
            </div>

            <h2 className="text-md text-gray-500 mt-10 mb-7">Price</h2>
            <input
              type="range"
              min={0}
              max={Math.max(...cars.map(c => c.price))}
              value={maxPrice}
              onChange={e => setMaxPrice(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
            <div className="flex justify-between text-sm text-gray-700">
              <span>Max.${maxPrice}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar
