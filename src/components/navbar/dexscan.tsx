import { dexScanMenu } from "@/lib/data";
import NavList from "./navList";

const DexScan = () => {
  return (
    <div className="bg-card shadow-xl space-y-6 p-6">
      <NavList list={dexScanMenu} />
    </div>
  );
};

export default DexScan;
