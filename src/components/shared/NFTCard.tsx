import { Models } from "appwrite";
import { Link } from "react-router-dom";

import { PostStats } from "@/components/shared";
import { multiFormatDateString } from "@/lib/utils";

type NFTCardProps = {
  name: string, 
  network: string
};

// name
// network
// image
const NFTCard = ({ nft }: NFTCardProps) => {

  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
        nft
        </div>

      </div>

    </div>
  );
};

export default NFTCard;
