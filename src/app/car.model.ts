export interface Car {
    _id?: string;
    vehicleName: string;
    vehicleModel: string;
    address: string;
    phoneNumber: string;
    cnic: string;
    productionYear: number;
    pricePerDay: number;
    registrationNumber: string;
    chassisNumber: string;
    imagePath?: string;
    // Add these properties if they exist in your backend data
    name?: string;
    image: string;
    description?: string;
    price?: number;
  }
  
  