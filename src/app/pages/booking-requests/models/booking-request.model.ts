import {Tour} from "../../homepage/models/tour.model";

export interface BookingRequest {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  tourId: number;
  id: number;
  tour: Tour
}
