/* eslint-disable react/prop-types */
import s from '../select/select.module.css'

const Select = ({option, onHendleChange}) => {
  return (
    <select className={s.select} onChange={(e) => onHendleChange(e.target.value)}>
      {option.map((item,index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  )
}

export default Select

