
const Card = (props) => {

  const {product} = props;
    
    
  return (
    <>
  <div className="card">
    <div className="image">
      <img src={product.images}/>
    </div>
    <div className="content">
      <div className="header">{product.title}</div>
      <div className="meta">
        <a>Friends</a>
      </div>
      <div className="description">{product.description}</div>
    </div>
    <div className="extra content">
      <span>
        <i className="dollar sign icon"></i>
        {product.price}
      </span>
    </div>
  </div>
    </>
  )
}

export default Card