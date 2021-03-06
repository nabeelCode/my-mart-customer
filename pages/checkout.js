
import { useRouter } from 'next/router'

import { FaArrowLeft } from "react-icons/fa"

export default function Checkout() {
    const router = useRouter()

    const goBack = () => router.back()

    return (
        <>
            <div className="flex flex-col h-screen space-y-2 pt-2 justify-items-center bg-primary">
                <div className="p-2 text-center text-white text-xl font-semibold">
                    Checkout
                </div>
                <div className="flex flex-col space-y-4 h-full bg-gray-100 p-2 pt-8 rounded-tr-3xl rounded-tl-3xl w-full">
                    <div className="rounded-md p-2 bg-white">
                        <input placeholder="Customer Name" className="w-full" />
                    </div>
                    <div className="rounded-md p-2 bg-white">
                        <input placeholder="Mobile Number" className="w-full" />
                    </div>
                    <div className="rounded-md p-2 bg-white">
                        <textarea placeholder="address" className="w-full" />
                    </div>
                    <div className="rounded-md p-2 bg-white">
                        <textarea placeholder="Delivery Note:" className="w-full" />
                    </div>
                    <div className="grid p-2 bg-white rounded-md gap-2">
                        <div>
                            Price Details
                        </div>
                        <div className="flex justify-between text-xs">
                            <div>Subtotal:</div>
                            <div>&#8377;100</div>
                        </div>
                        <div className="flex justify-between text-xs">
                            <div>Discount:</div>
                            <div>&#8377;100</div>
                        </div>
                        <div className="flex justify-between text-xs">
                            <div>Total:</div>
                            <div>&#8377;100</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* fixed parts */}
            <div onClick={goBack} className="fixed top-4 left-2 z-10 cursor-pointer shadow-normal p-1 bg-white rounded-full">
                <FaArrowLeft />
            </div>
            <div className="fixed bottom-1 ml-2 shadow-normal flex justify-between bg-primary w-[96%] sm:w-[32%] text-white p-2 rounded-md">
                <div>8</div>
                <div>Order Now</div>
                <div>&#8377;200</div>
            </div>
        </>
    )
}