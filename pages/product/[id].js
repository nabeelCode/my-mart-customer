import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

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

  const goBack = () => router.back();

  const product = props?.product;
  const [price, setPrice] = useState(
    product?.model?.specialPrice ?? product?.model?.price
  );

  const onChangeValue = (option) => {
    return () => setPrice(option?.specialPrice ?? option?.price);
  };

  return (
    <>
      <div className="grid gap-2 p-2 px-3 mb-[3rem]">
        {console.log("product", product)}
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
        {
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
        }
      </div>

      {/* fixed parts */}
      <div
        onClick={goBack}
        className="fixed top-2 left-2 z-10 cursor-pointer shadow-normal p-1 bg-white rounded-full"
      >
        <FaArrowLeft />
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

export async function getServerSideProps(context) {
  const { id } = context.params;
  const product = await getSingleProduct(id);
  return {
    props: {
      product: product.product,
    },
  };
}
