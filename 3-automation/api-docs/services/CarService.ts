import { Car } from "../../model/Car";

export class CarService {
    public get(): Promise<Car[]> {
        return Promise.resolve([
          { id: 1, manufacturer: 'Toyota', model: 'Camry' },
          { id: 2, manufacturer: 'VW', model: 'Golf' },
          { id: 3, manufacturer: 'BMW', model: 'M4' },
        ])
    }
}