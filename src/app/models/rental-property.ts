export interface RentalProperty {
    id: number;
    title: string;
    city: string;
    street: string;
    type: string;
    image: string,
    bedrooms: number,
    bathrooms: number,
    description: string,
    monthlyRent: number,
    shared: false,
}
