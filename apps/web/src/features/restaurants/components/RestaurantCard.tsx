export default function RestaurantCard() {
    return(
        <div className="w-full shadow-lg bg-gray-300 rounded-lg pb-2 overflow-hidden"> 
        <img className="rounded-t w-full" src="/images/restaurants/english-breakfast.jpg" alt="" />
        <h3 className="px-4 py-2">English Breakfast</h3>
        <p className="px-4 py-1">
            <span>⭐ 4.3</span>
        </p>
        <footer className="flex flex-row justify-between">
            <span className="pl-4">6.6Km</span> 
            <span className="pr-4">30-40 mins</span>
        </footer>
        </div>
    );
}