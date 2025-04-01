import { exchangesMenu } from "@/lib/data";
import NavList from "./navList";

const Exchanges = () => {
  return (
    <div className="bg-card shadow-xl space-y-6 p-6">
      <NavList list={exchangesMenu.centralized} title="Centralized Exchanges" />

      <NavList
        list={exchangesMenu.decentralized}
        title="Decentralized Exchanges"
      />
    </div>
  );
};

export default Exchanges;
