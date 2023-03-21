import { useParams } from "react-router-dom";
import Card from "../Card/Card";

const ItemContainer = (props) => {
  const { id } = useParams()
  const {products} = props;

  const product = products.find(prod => {
    return prod.id == id;
  })


  return (
    <>
    <div className="ui link cards">
    <Card product={product}></Card>
    </div>
    </>
  )
}

export default ItemContainer