import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-8 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="font-medium text-gray-900">
                Contact
              </li>
              <li>FoodDelivery@gmail.com</li>
              <li>+91 6578349023</li>
              <li>Customer Care</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium text-gray-900">
              Get the latest food news
            </h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-48 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button className="rounded-md border border-black px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="flex flex-col gap-4 text-sm text-gray-500 md:flex-row md:justify-between">
          <span>© 2026 FoodOrder</span>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-black">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-black">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
