import { productsMenu } from "@/lib/data";
import NavList from "./navList";

const Products = () => {
  return (
    <div className="bg-card flex shadow-xl min-w-52 gap-8 p-8 px-12">
      <div className=" space-y-8">
        <NavList list={productsMenu.products} title="Products" />
        <hr className=" border-gray-100 dark:border-gray-400/10" />
        <NavList list={productsMenu.other} />
      </div>
      <div className=" space-y-8 border-x border-gray-100 dark:border-gray-400/10 px-6">
        <NavList list={productsMenu.campaigns} title="Campaigns" />

        <NavList list={productsMenu.calendars} title="Calendars" />
      </div>
      <div className=" space-y-8">
        <NavList list={productsMenu.learn} title="Learn" />
      </div>
    </div>
  );
};

export default Products;
