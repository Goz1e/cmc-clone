import { CiStar } from "react-icons/ci";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { tableData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { IoMdArrowDropdown } from "react-icons/io";
import { Progress } from "@/components/ui/progress";

const formatNumber = (num: number) => (num < 0 ? Math.abs(num) : num);

const CryptoTable = () => {
  return (
    <div className="w-full relative">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow className="sticky def">
            <TableHead></TableHead>
            <TableHead>#</TableHead>
            <TableHead className="w-1/8">Name</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">1hr %</TableHead>
            <TableHead className="text-right">24h %</TableHead>
            <TableHead className="text-right">7d %</TableHead>
            {/* mcap, volli= */}
            <TableHead className="text-right">Market Cap</TableHead>
            <TableHead className="text-right">Volume (24h)</TableHead>
            <TableHead className="text-right">Circulating Supply</TableHead>
            <TableHead className="text-right">last 7 Days</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((item, index) => (
            <TableRow key={index} className="*:py-5">
              <TableCell className="font-medium">
                <CiStar />
              </TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell className="flex gap-2 items-center">
                <Image
                  src={item.logo}
                  height={30}
                  width={30}
                  className="rounded-full"
                  alt="coin"
                />{" "}
                <p>{item.name}</p>{" "}
              </TableCell>

              <TableCell className="text-right">${item.price}</TableCell>
              <TableCell
                className={cn(
                  "items-center",
                  item.oneHour < 0 ? "text-red-500" : "text-green-500"
                )}
              >
                <span className="flex items-center float-end">
                  <IoMdArrowDropdown
                    size={20}
                    className={`${item.oneHour > 0 && "rotate-180"}`}
                  />
                  {formatNumber(item.oneHour)}
                </span>
              </TableCell>
              <TableCell
                className={cn(
                  "items-center",
                  item.twentyFourHour < 0 ? "text-red-500" : "text-green-500"
                )}
              >
                <span className="flex items-center float-end">
                  <IoMdArrowDropdown
                    size={20}
                    className={`${item.twentyFourHour > 0 && "rotate-180"}`}
                  />
                  {formatNumber(item.twentyFourHour)}
                </span>
              </TableCell>
              <TableCell
                className={cn(
                  "items-center",
                  item.sevenDay < 0 ? "text-red-500" : "text-green-500"
                )}
              >
                <span className="flex items-center float-end">
                  <IoMdArrowDropdown
                    size={20}
                    className={`${item.sevenDay > 0 && "rotate-180"}`}
                  />
                  {formatNumber(item.sevenDay)}
                </span>
              </TableCell>

              <TableCell className="text-right">${item.mcap}</TableCell>
              <TableCell className="text-right">${item.vol}</TableCell>
              <TableCell className="text-right my-auto">
                ${item.cirsup}
                <span className="ms-1">{item.ticker}</span>
                <Progress value={item.randomPercent} />
              </TableCell>
              <TableCell className="text-right">
                <Image
                  src={item.graph}
                  height={50}
                  width={100}
                  alt={item.name}
                  className="ms-auto"
                />
              </TableCell>
            </TableRow>
          ))}

          {/* ))} */}
        </TableBody>
      </Table>
    </div>
  );
};

export default CryptoTable;
