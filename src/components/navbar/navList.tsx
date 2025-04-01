import { RiExternalLinkLine } from "react-icons/ri";
import Image from "next/image";

interface MenuItem {
  name: string;
  img: string;
  link: boolean;
}

interface navlistProp {
  title?: string;
  list: MenuItem[];
}

const NavList = ({ title, list }: navlistProp) => {
  return (
    <div className="w-full ">
      {title && <p className="text-[#a7b1c6] mb-1 text-nowrap">{title}</p>}
      <div className="space-y-1">
        {list.map((item, index) => (
          <div
            className="flex gap-4 items-center w-full hover:bg-grey rounded-md p-2"
            key={index}
          >
            <div className=" h-8 aspect-square">
              <Image src={item.img} height={40} width={40} alt="icon" />
            </div>
            <div className="inline-flex gap-1 items-center">
              <p className="text-nowrap">{item.name}</p>
              {item.link && <RiExternalLinkLine className="text-[#a7b1c6]" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavList;
