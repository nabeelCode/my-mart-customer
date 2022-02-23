import Head from 'next/head'
import Image from 'next/image'
import { FaShareAlt } from "react-icons/fa"
import { AiOutlineShop } from "react-icons/ai"
import One from "../public/images/prod.jpeg"
import Two from "../public/images/2.png"
import Three from "../public/images/3.png"
// Import Swiper React components
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Gallery1 from "../public/images/gallery1.jpg"

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

import Link from 'next/link'

const categories = [
  "cat 1",
  "cat 2",
  "cat 3",
  "cat 4",
  "cat 5",
  "cat 6",
  "cat 4",
  "cat 5",
  "cat 6"
]

const products = [
  {
    name: "product1",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

  }
]

export default function Home() {
  return (
    <>
      <div className="grid gap-4 p-2 justify-center">
        <div className="flex justify-between">
          <div>
            <AiOutlineShop size="1.2rem" />
          </div>
          <div>WhatsDeliver</div>
          <div>
            <FaShareAlt size="1.2rem" />
          </div>
        </div>
        {/* <div> */}
        {/* <Swiper
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        loop
        effect='fade'
        className='home-page-banner'
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        navigation={{
          nextEl: '.hps-right',
          prevEl: '.hps-left',
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: 'active-bullet',
        }}>
          <SwiperSlide >
            slide 1
          </SwiperSlide>
          <SwiperSlide >
            slide 2
          </SwiperSlide>
          <SwiperSlide >
            slide 3
          </SwiperSlide>
      </Swiper> */}
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          spaceBetween={10}
          className="max-w-full"
        >
          <SwiperSlide className="w-auto">
            <div className="grid h-[180px]">
              <Image
                alt="gallery"
                src={Gallery1}
                // height="680px"
                className="shadow rounded-lg"
              />
            </div>
            <div className="z-10 absolute h-full w-full  bg-gradient-to-black from-white top-0" />
          </SwiperSlide>
          <SwiperSlide className="w-auto">
            <div className="grid h-[180px]">
              <Image
                alt="gallery"
                src={Gallery1}
                // height="680px"
                className="shadow rounded-lg"
              />
            </div>
            <div className="z-10 absolute h-full w-full  bg-gradient-to-black from-white top-0" />
          </SwiperSlide>
          <SwiperSlide className="w-auto">
            <div className="grid h-[180px]">
              <Image
                alt="gallery"
                src={Gallery1}
                // height="680px"
                className="shadow rounded-lg"
              />
            </div>
            <div className="z-10 absolute h-full w-full  bg-gradient-to-black from-white top-0" />
          </SwiperSlide>
          <SwiperSlide className="w-auto">
            <div className="grid h-[180px]">
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
        {/* </div> */}
        <div className="flex overflow-scroll no-scrollbar space-x-2 py-2">
          {
            categories.map((item, index) => (
              <div key={index} className="p-3 px-6 shadow-normal rounded-md whitespace-nowrap">
                {item}
              </div>
            ))
          }
        </div>
        <div className="grid gap-4">
          <Link href="/product/1">
            <a>
              <div className="grid items-center gap-2 grid-cols-8 shadow-normal rounded-md p-2 py-4">
                <div className="col-span-3">
                  <Image
                    src={One}
                    alt="pro"
                  />
                </div>
                <div className="grid col-span-5 gap-2 rounded-md">
                  <div className="font-semibold">
                    Product Name
                  </div>
                  <div className="text-xs text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                  </div>
                  <div className="p-2 bg-primary rounded-md text-white">
                    Price:
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/product/1">
            <a>
              <div className="grid items-center gap-2 grid-cols-8 shadow-normal rounded-md p-2 py-4">
                <div className="col-span-3">
                  <Image
                    src={One}
                    alt="pro"
                  />
                </div>
                <div className="grid col-span-5 gap-2 rounded-md">
                  <div className="font-semibold">
                    Product Name
                  </div>
                  <div className="text-xs text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                  </div>
                  <div className="p-2 bg-primary rounded-md text-white">
                    Price:
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/product/1">
            <a>
              <div className="grid items-center gap-2 grid-cols-8 shadow-normal rounded-md p-2 py-4">
                <div className="col-span-3">
                  <Image
                    src={One}
                    alt="pro"
                  />
                </div>
                <div className="grid col-span-5 gap-2 rounded-md">
                  <div className="font-semibold">
                    Product Name
                  </div>
                  <div className="text-xs text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                  </div>
                  <div className="p-2 bg-primary rounded-md text-white">
                    Price:
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/product/1">
            <a>
              <div className="grid items-center gap-2 grid-cols-8 shadow-normal rounded-md p-2 py-4">
                <div className="col-span-3">
                  <Image
                    src={One}
                    alt="pro"
                  />
                </div>
                <div className="grid col-span-5 gap-2 rounded-md">
                  <div className="font-semibold">
                    Product Name
                  </div>
                  <div className="text-xs text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                  </div>
                  <div className="p-2 bg-primary rounded-md text-white">
                    Price:
                  </div>
                </div>
              </div>
            </a>
          </Link>
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