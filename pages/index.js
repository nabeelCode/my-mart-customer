import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { FaShareAlt } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
import { useCookies } from "react-cookie";
import cookies from "cookie";
import One from "../public/images/prod.jpeg";
import Two from "../public/images/2.png";
import Three from "../public/images/3.png";
// Import Swiper React components
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Gallery1 from "../public/images/gallery1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Link from "next/link";
import {
  createGuest,
  getBanners,
  getCategories,
  getProducts,
} from "../config/api";

const categories = [
  "cat 1",
  "cat 2",
  "cat 3",
  "cat 4",
  "cat 5",
  "cat 6",
  "cat 4",
  "cat 5",
  "cat 6",
];

const products = [
  {
    name: "product1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export default function Home(props) {
  //
  const customerId = props?.customer?.customerId;

  const [products, setProducts] = useState(props?.products);
  const [categoryFilter, setCategoryFilter] = useState({
    filterStatus: false,
    catId: null,
  });

  const [cookie, setCookie] = useCookies(["customerId"]);

  useEffect(() => {
    !cookie.customerId &&
      setCookie("customerId", customerId, {
        path: "/",
        sameSite: true,
      });
  }, [customerId, setCookie,cookie.customerId]);

  // useEffect(() => {
  //   setCookie("customerId", "customer", {
  //     path: "/",
  //     sameSite: true,
  //   });
  // }, []);

  const changeFilter = async (item) => {
    const products = props?.products;
    if (categoryFilter.filterStatus) {
      if (categoryFilter.catId === item._id) {
        setCategoryFilter({
          filterStatus: false,
          catId: null,
        });
        setProducts(products);
      } else {
        const filteredproducts = await products.filter((product) =>
          product.categories.find((cat) => cat._id === item._id)
        );
        setCategoryFilter({
          ...categoryFilter,
          catId: item._id,
        });
        setProducts(filteredproducts);
      }
    } else {
      const filteredproducts = await products.filter((product) =>
        product.categories.find((cat) => cat._id === item._id)
      );
      setCategoryFilter({
        filterStatus: true,
        catId: item._id,
      });
      setProducts(filteredproducts);
    }
  };

  return (
    <>
      <div className="grid gap-1 justify-center bg-gray-300 mb-[3rem]">
        {console.log("categories ", props.categories)}
        {console.log("products ", products)}
        {console.log("customer ", props?.customer)}
        {console.log("cookie ", cookie)}

        {/* {console.log("banners ", props.banners)} */}
        <div className="flex justify-between items-center bg-white text-primary p-2 text-lg font-semibold">
          <div>
            <AiOutlineShop size="1.5rem" />
          </div>
          <div>WhatsDeliver</div>
          <div>
            <FaShareAlt size="1.2rem" />
          </div>
        </div>
        <div className="grid gap-2 p-2">
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
        </div>
        {/* <div className="grid gap-4 bg-white pt-8 rounded-tr-3xl rounded-tl-3xl"> */}

        <div className="grid gap-2 px-3 bg-white pt-8 rounded-tr-3xl rounded-tl-3xl">
          <div className="flex overflow-scroll no-scrollbar space-x-2 py-2">
            {props?.categories.map((item, index) => (
              <div
                key={index}
                onClick={() => changeFilter(item)}
                className={`p-3 px-6 rounded-md cursor-pointer whitespace-nowrap border-[1px] border-gray-200 ${
                  categoryFilter.catId === item._id && " bg-primary text-white"
                } `}
              >
                {item.cat_name}
              </div>
            ))}
          </div>
          {products.length
            ? products.map((product, index) => (
                <Link href={"/product/" + product._id} key={index}>
                  <a>
                    <div className="grid items-center gap-2 grid-cols-8 border-[1px] border-gray-200 rounded-md p-2 py-4">
                      <div className="col-span-3">
                        <Image
                          src={product?.image?.thumbnail_image_url}
                          alt="pro"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="grid col-span-5 gap-2 rounded-md">
                        <div className="font-semibold">
                          {product?.product_name}
                        </div>
                        <div
                          className="text-xs text-gray-500"
                          dangerouslySetInnerHTML={{
                            __html:
                              product?.description.substring(0, 100) + "...",
                          }}
                        />
                        <div className="flex gap-1 ">
                          Price:{" "}
                          <span className="text-green-500">
                            &#8377;
                            {product?.specialPrice ?? product?.prod_price}
                          </span>
                          {product?.specialPrice && (
                            <span className="line-through text-red-500">
                              {product?.prod_price}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              ))
            : "No Products"}
        </div>
        {/* </div> */}
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
  );
}

export async function getServerSideProps({ req, res }) {
  const categories = await getCategories();
  const products = await getProducts();
  // const banners = await getBanners()
  const cookieData = req.headers?.cookie
    ? cookies.parse(req.headers?.cookie)
    : null;
  let customer = null;

  if (res) {
    if (!cookieData) {
      customer = await createGuest();
    }
  }

  return {
    props: {
      categories: categories,
      products: products,
      // banners: banners,
      customer: customer,
    },
  };
}
