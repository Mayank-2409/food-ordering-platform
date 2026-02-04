import RestaurantCard from "./RestaurantCard"

export default function RestaurantsPage() {
  return (
    <section className="p-8">
      <h1 className="text-2xl font-semibold">
        Restaurants
      </h1>

      <div className="grid grid-cols-4 gap-4">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </section>
  );
}
