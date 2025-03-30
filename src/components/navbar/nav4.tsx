import { Button } from "../ui/button";

const Nav4 = () => {
  return (
    <div className="inline-flex gap-2 place-items-center *:text-black *:dark:text-white *:font-semibold text-[11px]">
      <Button className="h-8 bg-grey hover:bg-gray-700">Get listed</Button>
      <Button className="h-8 bg-grey hover:bg-gray-700">API</Button>
    </div>
  );
};

export default Nav4;
