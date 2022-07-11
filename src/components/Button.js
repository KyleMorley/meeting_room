const Button = ({txt, onClick}) => {
  return (
    <button className="btn" onClick={ onClick }>{txt}</button>
  )
}

export default Button