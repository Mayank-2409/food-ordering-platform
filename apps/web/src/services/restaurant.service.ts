export type Restaurant = {
  id: string;
  name: string;
  rating: number;
  distanceKm: number;
  deliveryTime: string;
  imageUrl: string;
};

const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "English Breakfast",
    rating: 4.3,
    distanceKm: 6.6,
    deliveryTime: "30-40 mins",
    imageUrl: "/images/restaurants/english-breakfast.jpg",
  },
];

export async function getRestaurants(): Promise<Restaurant[]> {
  return restaurants;
}
