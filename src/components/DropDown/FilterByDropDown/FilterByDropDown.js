import React from 'react'
import styles from '../DropDown.module.css'
import { BsFillCaretDownFill } from "react-icons/bs";

const FilterByDropDown = () => {
  return (
      <ul class={styles.dropdown}>
        <li><a href="#">Filter By <BsFillCaretDownFill /></a>
            <ul>
                <li><a href="">All Pendng Payouts</a></li>
                <li><a href="">Ready Payouts</a></li>
                <li><a href="#">No Leaks</a></li>
            </ul>
        </li>
    </ul>
  )
}

export default FilterByDropDown