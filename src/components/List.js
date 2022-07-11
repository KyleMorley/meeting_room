import ListItem from "./ListItem"


const List = ({list, bookRoom}) => {

  return (
    <div  className="container">
        {list.map((lst) => (
            <ListItem key={lst.id} item={ lst } bookRoom={ bookRoom }/>
        ))}
    </div>
  )
}

export default List