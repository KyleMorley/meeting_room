import Button from "./Button"

const ListItem = ({item, bookRoom}) => {
  return (
    <div className="list-items">
        <h2>{item.time}</h2>
        {item.available ? <Button txt={'Book Now'} onClick={ () => bookRoom(item.id) } /> : <h2>Unavailable</h2>}
    </div>
  )
}

export default ListItem