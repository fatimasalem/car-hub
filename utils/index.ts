import { CarProps } from "@/types";

export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'f82055d07dmshd2c2f1aa08425d5p13a03cjsndba6faf2ecf1',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3', {
        headers: headers,
    });

	const result = await response.json();

    return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // in dollars

    const mileageFactor = 0.1; // rate per mile driven

    const ageFactor = 0.05; // rate per year of vehicle age

    // additional calculations
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate; // total rental rate per day

    return rentalRatePerDay.toFixed(0);
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    url.searchParams.append('customer', 'hrjavascript-mastery' || '');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);
  
    return `${url}`;
  } 