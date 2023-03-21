import { NavLink, } from 'react-router-dom'


const Card = (props) => {

  const {product} = props;
    
    
  return (
    <>
  <NavLink to={`../item/${product.id}`} className="card">
    <div className="image">
      <img src={product.images}/>
    </div>
    <div className="content">
      <div className="header">{product.title}</div>
      <div className="meta">
      </div>
      <div className="description">{product.description}</div>
    </div>
    <div className="extra content">
      <span>
        <i className="dollar sign icon"></i>
        {product.price}
      </span>
    </div>
  </NavLink>
    </>
  )
}

export default Card