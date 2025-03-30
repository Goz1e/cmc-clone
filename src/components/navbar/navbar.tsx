import cmc_mark_light from "@/../public/cmc-mark-light.png";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <div className="flex gap-5 text-sm font-semibold content-center items-center">
      <Image
        src={cmc_mark_light}
        height={70}
        width={170}
        alt="cmc-mark"
        className="invert dark:invert-0"
      ></Image>
      <div>Cryptocurrencies</div>
      <div>DexScan</div>
      <div>Exchanges</div>
      <div>Community</div>
      <div>Products</div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
