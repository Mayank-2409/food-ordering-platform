import Link from "next/link";

export default function Footer() {
    return (
        <div className="top-96">
            <div className="flex flex-row justify-between">
        <div>
            <ul>
                <li>FoodDelivery@gmail.com</li>
                <li>+91 6578349023</li>
                <li>Customer Care</li>
            </ul>
        </div>
        <div>
            <ul>
                <h3>Get the latest food news</h3>
                <input className="border-x-2 border-y-2 border-black" type="text" /> <button>Subscribe</button>
            </ul>
        </div>
        </div>
        <hr />
        <div>
            <ul>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        </div>
    );
}