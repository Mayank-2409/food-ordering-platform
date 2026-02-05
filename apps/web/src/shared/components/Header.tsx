import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
  <div className="mx-auto flex max-w-7xl items-center justify-between py-4">
    <Link href="/" className="text-xl font-semibold tracking-tight">
      FoodOrder
    </Link>

    <nav className="flex items-center gap-6 text-sm text-gray-600">
      <Link
        href="/restaurants"  
        className="hover:text-black transition-colors" 
      >
        Restaurants
      </Link>
    </nav>
  </div>
</header>
    // <header className="border-b bg-white">
    //   <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
    //     <Link href="/" className="text-xl font-bold">
    //       FoodOrder
    //     </Link>

    //     <nav className="flex gap-6 text-sm font-medium text-gray-700">
    //       <Link href="/restaurants" className="hover:text-black">
    //         Restaurants
    //       </Link>
    //     </nav>
    //   </div>
    // </header>
  );
}
