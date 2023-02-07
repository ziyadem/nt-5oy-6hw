import React from 'react';
import useCard from "../Hooks/useCard";
import DetailsCard from "../Components/DetailsCard";
import PlaceholderDetailscars from "../Components/PlaceholderDetailscars";

const SearchCard = ({card}) => {
    const [products, loading] = useCard(card[0]);
  return (
    <div className="container py-3">
          {loading ? <PlaceholderDetailscars /> : <DetailsCard idCard={products} />}
    </div>
  )
}

export default SearchCard
