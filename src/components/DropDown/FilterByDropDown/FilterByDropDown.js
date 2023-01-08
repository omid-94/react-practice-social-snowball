import React from 'react'
import styles from '../DropDown.module.css'
import { BsFillCaretDownFill } from "react-icons/bs";

const FilterByDropDown = () => {
  const preventDefault = (e) => e.preventDefault();
  return (
      <ul className={styles.Dropdown}>
        <li><a onClick={preventDefault}>Filter By <BsFillCaretDownFill /></a>
            <ul>
                <li><a  onClick={preventDefault}>All Pendng Payouts</a></li>
                <li><a  onClick={preventDefault}>Ready Payouts</a></li>
                <li><a  onClick={preventDefault}>No Leaks</a></li>
            </ul>
        </li>
    </ul>
  )
}

export default FilterByDropDown