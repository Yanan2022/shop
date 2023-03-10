import "./ProductCard.css"

export const ProductCard = ({product}) => {
  const {id, name, price, image} = product;

  return (
    <div>
      <div className="productCard">
        <img src={image} alt={name} />
        <p className="name">{name}</p>
        <div className="action"></div>
        <p>${price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  )
}


