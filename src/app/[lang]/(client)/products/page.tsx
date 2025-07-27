import ProductCard from "@/containers/client/products/product-card";

const products = [
  {
    name: "Sole Elegance",
    price: 10.5,
    description: "5 types of shoos available",
    imageUrl: "https://readymadeui.com/images/product9.webp",
    star: 3
  },
  {
    name: "Sole Elegance 2",
    price: 13,
    description: "5 types of shoos available",
    imageUrl: "https://readymadeui.com/images/product10.webp",
    star: 3
  },
  {
    name: "Sole Elegance 2",
    price: 13,
    description: "5 types of shoos available",
    imageUrl: "https://readymadeui.com/images/product10.webp",
    star: 3
  },
]

const Products = ({}) => {
  return (
    <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
        
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => <ProductCard key={index} {...product} />)}
      </div>
    </div>
  );
};

export default Products;
