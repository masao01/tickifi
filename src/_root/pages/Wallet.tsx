import { useToast } from "@/components/ui/use-toast";
import { Loader, UserCard } from "@/components/shared";
import { useNavigate } from "react-router-dom";

import { NFTCard } from "@/components/shared";
type NFTCardProps = {
    name: string, 
    network: string
  };
const Wallet = ({ nfts1 }: NFTCardProps[]) => {
  const { toast } = useToast();
    let nfts: NFTCardProps[] = 
    [
        {
            name: "nft #1",
            network: "base",
            image: "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
        },
        {
            name: "nft #2",
            network: "base",
            image: "https://i.guim.co.uk/img/media/b8a75934f827bdaf02a3814d1669c8da19886881/0_727_3500_2100/master/3500.jpg?width=465&dpr=1&s=none"
        }
    ]

    
  return (
    <div className="common-container">
        Hello Wallet
        <ul className="flex flex-col flex-1 gap-9 w-full ">
              {nfts.map((nft: any, index: any) => (
                <li key={index} className="flex justify-center w-full">
                  <NFTCard nft={nft}/>
                </li>
              ))}
            </ul>
      
    </div>
  );
};

export default Wallet;
