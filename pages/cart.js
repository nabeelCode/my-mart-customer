import Image from "next/image"
import Link from "next/link"
import One from "../public/images/prod.jpeg"

export default function Cart() {
    return (
        <>
            <div className="flex flex-col h-screen space-y-2 justify-items-center">
                <div className="p-2 text-center">Cart</div>
                <div className="grid gap-4 bg-gray-100 p-2 pt-8 rounded-tr-3xl rounded-tl-3xl">
                    <div className="grid grid-cols-12 gap-2 bg-white p-2 rounded-md">
                        <div className="col-span-4">
                            <Image
                                alt="product"
                                src={One}
                            />
                        </div>
                        <div className="grid col-span-8 text-xs gap-2">
                            <div>Product Name</div>
                            <div>Price</div>
                            <div>Options:</div>
                            <div>Addons:</div>
                        </div>
                    </div>
                    <div className="grid gap-2 bg-white p-2 rounded-md">
                        <div>
                            Promo Code
                        </div>
                        <div className="flex gap-2">
                            <input className="bg-gray-100 rounded-md w-9/12" />
                            <button className="w-3/12 bg-primary rounded-md text-white p-1">Apply</button>
                        </div>
                    </div>
                    <div className="p-2 bg-white rounded-md">
                        <div className="flex justify-around">
                            <div className="flex items-center gap-2">
                                <input type="radio" /> Delivery
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" checkup /> Pickup
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-2 bg-white p-2 rounded-md">
                        <div>
                            Price Details
                        </div>
                        <div className="flex justify-between">
                            <div>Subtotal:</div>
                            <div>&#8377;400</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Discount:</div>
                            <div>&#8377;50</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Total:</div>
                            <div>&#8377;1000</div>
                        </div>
                    </div>
                </div>
            </div>
            <Link href="/checkout">
                <a>
                    <div className="fixed bottom-1 ml-2 shadow-normal flex justify-between bg-primary w-[96%] sm:w-[32%] text-white p-2 rounded-md">
                        <div>8</div>
                        <div>Checkout</div>
                        <div>&#8377;200</div>
                    </div>
                </a>
            </Link>
        </>
    )
}