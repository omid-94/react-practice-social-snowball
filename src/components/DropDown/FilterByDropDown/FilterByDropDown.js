import React from 'react'
import styles from '../DropDown.module.css'
import { BsFillCaretDownFill } from "react-icons/bs";

const FilterByDropDown = () => {
  const preventDefault = (e) => e.preventDefault();
  return (
      <ul className={styles.Dropdown}>
        <li><a onClick={preventDefault}>Filter By <BsFillCaretDownFill /></a>
            <ul>
                <li><a  href=''>All Pendng Payouts</a></li>
                <li><a  href=''>Ready Payouts</a></li>
                <li><a  href=''>No Leaks</a></li>
            </ul>
        </li>
    </ul>
  )
}

export default FilterByDropDown