import { Link } from 'react-router-dom'

const Vehicle = ({ vehicles }) => {
  return (
    <div>
      <Link to="/vehicle/newvehicle">Add New Vehicle</Link>
      {vehicles.map((vehicle, index) => (
        <Link to={`/vehicle/${vehicle._id}/${index}`} key={vehicle._id}>
          <img src={vehicle.imageURL} alt={vehicle.name} className="carpic" />
          <h3>{vehicle.name}</h3>
        </Link>
      ))}
    </div>
  )
}

export default Vehicle
