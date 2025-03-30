import { Button } from "../ui/button";

const Nav4 = () => {
  return (
    <div className="inline-flex gap-2 place-items-center *:text-black *:dark:text-white *:font-semibold text-[11px]">
      <Button variant={"ghost"} className="h-8 ">
        Get listed
      </Button>
      <Button variant={"ghost"} className="h-8 ">
        API
      </Button>
    </div>
  );
};

export default Nav4;
