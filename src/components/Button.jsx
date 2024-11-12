/* eslint-disable react/prop-types */

const Button = ({handleClick, children, disabled}) => {
  return (
    <div>
      <button onClick={handleClick}  className={`cursor-pointer ${disabled ? "bg-blue_300": "bg-green" }  py-2 rounded-lg px-24 `} >{children}</button>
    </div>
  )
}

export default Button
