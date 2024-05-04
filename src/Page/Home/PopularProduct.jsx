import ProductCard from "./ProductCard";

const PopularProduct = () => {
  const array = [
    {id:1, name:"Car Engine Plug"},
    {id:2, name:"Car Air Filter"},
    {id:3, name:"Cools Led Light"},
    {id:4, name:"Cools Led Light"},
    {id:5, name:"Cools Led Light"},
    {id:6, name:"Car Air Filter"}]
  return (
    <div>
      <div className="md:w-1/2 mx-auto text-center space-y-3">
        <h1 className="text-xl font-semibold text-error">Popular Products</h1>
        <h1 className="text-3xl font-bold">Browse Our Products</h1>
        <p className="text-sm text-neutral">
        the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
        </p>
      </div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {array.map((item)=> <ProductCard item={item} key={item.id} />)}
</div>
    </div>
  );
};

export default PopularProduct;
