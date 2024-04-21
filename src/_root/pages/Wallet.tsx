
import { useEffect, useState } from "react";
// import { useToast } from "@/components/ui/use-toast";
import { Loader } from "@/components/shared";
import { getUserTickets } from "@/web3/utils";
import { useUserContext } from "@/context/AuthContext";
import { NFTCard } from "@/components/shared";

const Wallet = () => {
const { user } = useUserContext();
console.log(`user: ${JSON.stringify(user, null, 2)}`);

  // const { toast } = useToast();
  const [nfts, setNFTs] = useState<any[]>([]);
  
  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        let userNftsBase = [];
        let userNftsMorph = [];
        let userNfts;
        if (user.publicKey) {
            userNftsBase = await getUserTickets("BASE", user.publicKey);
            userNftsMorph = await getUserTickets("MORPH", user.publicKey);
            userNfts = userNftsBase.concat(userNftsMorph);
        }

        console.log(`userNfts: ${JSON.stringify(userNfts, null, 2)}`);
        setNFTs(userNfts || []);
      } catch (error: any) {
        console.error("Error fetching NFTs:", error);
        // toast?.error("Error fetching NFTs"); 
      }
    };

    fetchNFTs();
  }, []); 

  return (
    <div className="common-container">
      <h1>Crypto Wallet</h1>
      {nfts.length === 0 ? (
        <Loader />
      ) : (
        <ul className="flex flex-col flex-1 gap-9 w-full">
          {nfts.map((nft, index) => (
            <li key={index} className="flex justify-center w-full">
              <NFTCard nft={nft} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wallet;
