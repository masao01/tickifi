import { Models } from "appwrite";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui";
import { PostStats } from "@/components/shared";
import { multiFormatDateString } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

type NFTCardProps = {
  name: string,
  network: string,
  image: string
};

const NFTCard = ({ nft }: NFTCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <p>{nft.name}</p>
          <p>{nft.network}</p>
          {/* <img
            src={nft.image}
            alt="nft image"
            className="post_details-img"
          /> */}
        </div>

        <Button
          type="button"
          className="shad-button_dark_4"
          onClick={() => navigate("/create-post")}>
            Review
        </Button>
      </div>
    </div>
  );
};

export default NFTCard;
