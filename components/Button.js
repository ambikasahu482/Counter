const Button = ({ imageUrl, buttonName, clickHandler,children }) => {

  return (
    <button  className= "button" onClick={clickHandler} title={children}>
      {children}
      <img src={imageUrl} alt={children} />
    </button>
  )
}

export default Button