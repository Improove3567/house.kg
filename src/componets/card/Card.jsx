import { Link } from 'react-router-dom'

export default function Card(props) {
  return (
    <div className="card col-3" >
      <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">{props.price} $</p>
          <Link to={"/card/" + props.id} className="btn btn-primary">Подробнее</Link>
        </div>
    </div>
  )
}
