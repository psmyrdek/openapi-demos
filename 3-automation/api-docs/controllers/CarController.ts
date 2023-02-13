import { Controller, Get, Post, Delete, OperationId, Route, Tags, Path, Body } from 'tsoa'
import { Car } from '../../model/Car'
import { AddCarParams } from '../model/AddCarParams'
import { CarService } from '../services/CarService'

@Tags('Car')
@Route('/cars')
export class CarController extends Controller {
  /**
   * Retrieves the list of cars
   */
  @Get()
  @OperationId('getCars')
  public getCars(): Promise<Car[]> {
    return new CarService().get()
  }

  /**
   * Adds new car
   */
  @Post()
  @OperationId('addCar')
  public addCar(@Body() requestBody: AddCarParams): Promise<Car[]> {
    return new CarService().get()
  }

  /**
   * Removes car by id
   */
  @Delete('{id}')
  @OperationId('deleteCar')
  public deleteCar(@Path() id: number): Promise<Car[]> {
    return new CarService().get()
  }
}
