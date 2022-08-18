import axios from "./axios";

export const getCategories = async () => {
  const categories = await axios({
    method: "get",
    url: "category?business_slug=rafa-1622047710288-4f77474c-8664-45fc-9c9f-95d94fe9dbdb",
  });
  return categories.data.data.category;
};

export const getProducts = async () => {
  const products = await axios({
    method: "get",
    url: "product?business_slug=rafa-1622047710288-4f77474c-8664-45fc-9c9f-95d94fe9dbdb",
  });
  return products.data.data;
};

export const getSingleProduct = async (id) => {
  const product = await axios({
    method: "get",
    url: `product/${id}?business_slug=rafa-1622047710288-4f77474c-8664-45fc-9c9f-95d94fe9dbdb`,
  });
  return product.data.data;
};

export const getBanners = async () => {
  const banners = await axios({
    method: "get",
    url: "banners?business_slug=rafa-1622047710288-4f77474c-8664-45fc-9c9f-95d94fe9dbdb",
  });
  return banners;
};

export const createGuest = async () => {
  const customer = await axios({
    method: "post",
    url: "customer/createGuest",
    data: {
      business_slug: "rafa-1622047710288-4f77474c-8664-45fc-9c9f-95d94fe9dbdb",
    },
  });
  return customer?.data?.data
};

// export const addToCart = async () => {
//   const 
// }