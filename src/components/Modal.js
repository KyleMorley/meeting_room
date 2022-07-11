import Button from "./Button"

const Modal = ({toggleModal, reset}) => {
  return (
    <div className="modal-container">
        <div className="modal-contents">
         <Button txt={'Reset Meetings'} onClick={reset}/>
         <Button txt={'Close Modal'} onClick={toggleModal}/> 
        </div>
    </div>
  )
}

export default Modal