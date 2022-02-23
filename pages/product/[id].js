
// Import Swiper React components
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Gallery1 from "../../public/images/gallery3.jpeg"

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetail() {
    return (
        <>
            <div className="grid gap-2 p-2 px-3">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    spaceBetween={10}
                    className="max-w-full"
                >
                    <SwiperSlide>
                        <div className="grid h-[380px]">
                            <Image
                                alt="gallery"
                                src={Gallery1}
                                // height="680px"
                                className="shadow rounded-lg"
                            />
                        </div>
                        <div className="z-10 absolute h-full w-full  bg-gradient-to-black from-white top-0" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid h-[380px]">
                            <Image
                                alt="gallery"
                                src={Gallery1}
                                // height="680px"
                                className="shadow rounded-lg"
                            />
                        </div>
                        <div className="z-10 absolute h-full w-full  bg-gradient-to-black from-white top-0" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid h-[380px]">
                            <Image
                                alt="gallery"
                                src={Gallery1}
                                // height="680px"
                                className="shadow rounded-lg"
                            />
                        </div>
                        <div className="z-10 absolute h-full w-full  bg-gradient-to-black from-white top-0" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid h-[380px]">
                            <Image
                                alt="gallery"
                                src={Gallery1}
                                // height="680px"
                                className="shadow rounded-lg"
                            />
                        </div>
                        <div className="z-10 absolute h-full w-full  bg-gradient-to-black from-white top-0" />
                    </SwiperSlide>


                </Swiper>
                <div>
                    Product Name
                </div>
                <div className="text-xs">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </div>
                <div>
                    Price: &#8377;400
                </div>
                <div className="p-2 rounded-lg bg-gray-100 gap-2 grid">
                    <div>
                        Options
                    </div>
                    <div className="grid gap-1">
                        <div className="flex gap-2 items-center">
                            <input type="radio" checked />
                            <span>option 1</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <input type="radio" />
                            <span>option 1</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <input type="radio" />
                            <span>option 1</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <input type="radio" />
                            <span>option 1</span>
                        </div>
                    </div>
                </div>
                <div className="p-2 rounded-lg bg-gray-100 gap-2 grid">
                    <div>
                        Addons
                    </div>
                    <div className="grid gap-1">
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" checked />
                            <span>Addon 1</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" />
                            <span>Addon 1</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" />
                            <span>Addon 1</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" />
                            <span>Addon 1</span>
                        </div>
                    </div>
                </div>
            </div>
            <Link href="/cart">
                <a>
                    <div className="fixed bottom-1 ml-2 shadow-normal flex justify-between bg-primary w-[96%] sm:w-[32%] text-white p-2 rounded-md">
                        <div>8</div>
                        <div>Go to Cart</div>
                        <div>&#8377;200</div>
                    </div>
                </a>
            </Link>
        </>
    )
}