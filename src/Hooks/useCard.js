import { useEffect, useState } from "react";
import axios from "axios";

function useCard(pathName) {
  const [products, setCard] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let unmounted = false;

    async function getCard() {
      try {
        setLoading(true);
        let res = await axios.get(`/products/${pathName}`);
        if (!unmounted && res.status === 200) setCard(res.data);
      } catch (error) {
        toast(error.response.data.error);
      } finally {
        setLoading(false);
      }
    }

    getCard();

    return () => {
      unmounted = true;
    };
  }, []);

  return [products, loading];
}

export default useCard;
