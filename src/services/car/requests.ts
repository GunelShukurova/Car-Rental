import { endpoinds } from "../../constants";
import type { Car } from "../../types/car";
import { instance } from "../instance";

export async function getAllCars(): Promise<Car[] | undefined> {
  try {
    const response = await instance.get<Car[]>(endpoinds.cars);
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

