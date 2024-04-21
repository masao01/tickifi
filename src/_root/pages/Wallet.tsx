import { useToast } from "@/components/ui/use-toast";
import { Loader, UserCard } from "@/components/shared";

import { NFTCard } from "@/components/shared";

const Wallet = () => {
  const { toast } = useToast();
    let nft = {
        name: "nft #1",
        network: "base"
    }
  return (
    <div className="common-container">
        Hello Wallet
      <NFTCard nft={nft}/>
    </div>
  );
};

export default Wallet;
