import cmc_mark_light from "@/../public/cmc-mark-light.png";
import Image from "next/image";
import { applySavedTheme } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Products from "./products";
import Community from "./community";
import Exchanges from "./exchanges";
import Cryptocurrencies from "./cryptocurrencies";
import DexScan from "./dexscan";

const Navbar = () => {
  applySavedTheme();
  return (
    <div className="flex gap-5 text-sm font-semibold content-center items-center">
      <Image
        src={cmc_mark_light}
        height={70}
        width={170}
        alt="cmc-mark"
        className="invert dark:invert-0"
      ></Image>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Cryptocurrencies</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Cryptocurrencies />
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>DexScan</NavigationMenuTrigger>
            <NavigationMenuContent>
              <DexScan />
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Exchanges</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Exchanges />
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Community</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Community />
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Products />
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
