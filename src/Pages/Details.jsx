import useCard from "../Hooks/useCard";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import DetailsCard from "../Components/DetailsCard"
import PlaceholderDetailscars from "../Components/PlaceholderDetailscars";


const Details = () => {
let {id}=useParams()
let cardId=Number(id);
const [products, loading] = useCard(cardId);

return (
  <>
     <Header />
        <div className="container py-3">
          {loading ? <PlaceholderDetailscars /> : <DetailsCard idCard={products} />}
        </div>
  </>
  );
};

export default Details;
