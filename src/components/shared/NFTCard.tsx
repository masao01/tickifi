import { Button } from "@/components/ui";
import { useNavigate } from "react-router-dom";

const NFTCard = ({ nft }: any) => {
  const navigate = useNavigate();
    console.log(`nft: ${JSON.stringify(nft, null, 2)}`)
  return (
    <div className="post-card">
          <h3>{nft.metadata.name}</h3>
          <hr></hr>
          <img
            src={nft.metadata.image}
            alt="nft image"
            className="post_details-img"
          />
        
        <Button
          type="button"
          className="shad-button_dark_4"
          onClick={() => {
            localStorage.setItem('nftImage', nft.metadata.image);
            navigate("/create-post")
          }
          }>
            Review
        </Button>

    </div>
  );
};

export default NFTCard;
