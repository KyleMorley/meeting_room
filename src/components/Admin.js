import { useState } from "react"

const Admin = ({toggleModal}) => {
    

  return (
    <h2 className="admin" onClick={toggleModal}>Admin</h2>
  )
}

export default Admin