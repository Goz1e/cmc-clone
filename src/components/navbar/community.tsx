import { community } from "@/lib/data";
import NavList from "./navList";

const Community = () => {
  return (
    <div className="bg-card flex shadow-xl p-6">
      <NavList list={community} />
    </div>
  );
};

export default Community;
