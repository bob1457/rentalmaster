import { OccupantsDetails } from "./occupants-details";
import { Reference } from "./reference";

export interface RentalApplication {
    id: number;
    rentalPropertyId: number;
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
    occupants: number;
    occupantsDetails: OccupantsDetails[];
    currentAddress: string;
    pets: boolean;
    employmentStatus: string;
    employer: string;
    occupation: string;
    annualIncome: number;
    otherIncome: number;
    references: Reference[];
}