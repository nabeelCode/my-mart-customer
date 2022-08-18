import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

// Import Swiper React components
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Gallery1 from "../../public/images/gallery3.jpeg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowLeft } from "react-icons/fa";
import { getSingleProduct } from "../../config/api";

export default function ProductDetail(props) {
  const router = useRouter();
  const cookie = useCookies("customerId");
  const goBack = () => router.back();

  const product = props?.product;
  const [price, setPrice] = useState(
    product?.model?.specialPrice ?? product?.model?.price
  );
  const [quantity, setQuantity] = useState(1);
  const [optionId, setOptionId] = useState("");

  const onChangeValue = (option) => {
    return () => {
      setPrice(option?.specialPrice ?? option?.price);
      setOptionId(option?._id);
    };
  };

  const addToCart = () => {
    const prod = {
      customerType: "Guest",
      userId: cookie[0]?.customerId,
      product: {
        product_id: product?._id,
        selection_type: product?.model?.selection_price_type,
        selection_price_id: optionId,
        quantity,
      },
    };
    console.log("productz ",prod)
  };

  const changeQuantity = (type) => {
    if (type === "inc") {
      return () => setQuantity(quantity + 1);
    } else if (type === "dec" && quantity > 1) {
      return () => setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="grid gap-2 p-2 px-3 mb-[3rem]">
        {console.log("product", product)}
        {console.log("option", optionId)}
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
        </Swiper>
        <div>{product?.general?.name}</div>
        <div className="text-xs">{product?.general?.description}</div>
        <div>
          Price: <span className="text-green-500">&#8377;{price}</span>
          {product?.specialPrice && (
            <span className="line-through text-red-500">{price}</span>
          )}
        </div>
        {product?.model?.selection_price_type === "selection_price" && (
          <div className="p-2 rounded-lg bg-gray-100 gap-2 grid">
            <div>Selection Price</div>
            <div className="grid gap-1">
              {product?.model?.selected_price.map((option) => (
                <div className="flex gap-2 items-center" key={option?._id}>
                  <input
                    name="selectionPrice"
                    id={option?._id}
                    type="radio"
                    value={option?.title}
                    onChange={onChangeValue(option)}
                  />
                  <label htmlFor={option?._id}>{option?.title}</label>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="grid grid-cols-8 gap-2 items-center">
          <div className="flex justify-between gap-2 p-2 bg-gray-300 rounded-md col-span-2">
            <div className="cursor-pointer" onClick={changeQuantity("dec")}>
              -
            </div>
            <div>{quantity}</div>
            <div className="cursor-pointer" onClick={changeQuantity("inc")}>
              +
            </div>
          </div>
          <div onClick={addToCart} className="flex justify-between bg-primary text-white rounded-md p-2 gap-2 col-span-6 cursor-pointer">
            <div>Add To Cart</div>
            <div>{(price * quantity).toFixed(3)}</div>
          </div>
        </div>
      </div>

      {/* fixed parts */}
      <div
        onClick={goBack}
        className="fixed top-2 left-2 z-10 cursor-pointer shadow-normal p-1 bg-white rounded-full"
      >
        <FaArrowLeft />
      </div>
      {/* <Link href="/cart">
        <a>
          <div className="fixed bottom-1 ml-2 shadow-normal flex justify-between bg-primary w-[96%] sm:w-[32%] text-white p-2 rounded-md">
            <div>8</div>
            <div>Go to Cart</div>
            <div>&#8377;200</div>
          </div>
        </a>
      </Link> */}
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const product = await getSingleProduct(id);
  return {
    props: {
      product: product.product,
    },
  };
}
