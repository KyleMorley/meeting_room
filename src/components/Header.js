import Admin from "./Admin";

const Header = ({ toggleModal }) => {
  return (
    <header className="header">
        <h2>Meeting Room</h2>
        <Admin toggleModal={toggleModal}/>
    </header>
  )
}

export default Header