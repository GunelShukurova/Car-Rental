import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type  { Car } from "../types/car";
import { getAllCars } from "../services/car/requests";

const CarDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getAllCars();
        const foundCar = data.find(
          (car) => car.id.toString() === id?.toString(),
        );
        setCar(foundCar || null);
      } catch (error) {
        console.log(error);
      }
    };   
    loadData();
  }, [id]);

  if (!car) return <div className="p-4">Car not found</div>;

  return (
  <div className="p-4 pt-32 sm:pt-24 lg:pt-30 flex flex-col lg:flex-row gap-6 lg:gap-10 justify-center items-start max-w-6xl mx-auto mix-g min-h-screen">
  <div className="flex flex-col w-full lg:w-auto">
    <img
      className="w-full max-w-2xl h-52 sm:h-72 md:h-80 lg:h-96 object-cover rounded-md mb-5"
      src={car.image}
      alt={car.model}
    />
    <div className="flex gap-3">
      <img
        className="h-16 sm:h-20 md:h-24 lg:h-28 w-1/3 object-cover rounded-md"
        src={car.image}
        alt={car.model}
      />
      <img
        className="h-16 sm:h-20 md:h-24 lg:h-28 w-1/3 object-cover rounded-md"
        src={car.images && car.images.length > 0 ? car.images[0] : car.image}
        alt={car.model}
      />
      <img
        className="h-16 sm:h-20 md:h-24 lg:h-28 w-1/3 object-cover rounded-md"
        src={car.images && car.images.length > 0 ? car.images[1] : car.image}
        alt={car.model}
      />
    </div>
  </div>

  <div className="flex flex-col gap-4 text-gray-700 w-full lg:w-[420px] xl:w-[480px] bg-white p-6 h-auto rounded-lg shadow-sm">
    <span className="text-2xl sm:text-3xl text-gray-900 font-semibold">
      {car.brand} {car.model}
    </span>
    <span className="text-base sm:text-lg">{car.description}</span>

    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex gap-2 items-center">
          <span className="text-lg text-gray-500">Type Car</span>
          <span className="text-lg text-gray-900">{car.category}</span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-lg text-gray-500">Capacity</span>
          <span className="text-lg text-gray-900">{car.seats} Person</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex gap-2 items-center">
          <span className="text-lg text-gray-500">Steering</span>
          <span className="text-lg text-gray-900">{car.transmission}</span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-lg text-gray-500">Gasoline</span>
          <span className="text-lg text-gray-900">{car.fuelCapacity}L</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-4">
        <div className="text-lg sm:text-xl font-semibold">
          Price: <span className="font-normal text-gray-500">${car.price} / day</span>
        </div>
        <button className="mt-2 sm:mt-0 bg-[#183487] text-white w-full sm:w-[134px] h-[50px] rounded-md flex justify-center items-center transition-colors hover:bg-[#2349b2]">
          Rental Car
        </button>
      </div>
    </div>
  </div>
</div>
  );
};

export default CarDetail;
