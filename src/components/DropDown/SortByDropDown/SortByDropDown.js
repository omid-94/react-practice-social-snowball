import React from 'react'
import styles from '../DropDown.module.css'
import { BsFillCaretDownFill , BsFillCaretRightFill } from "react-icons/bs";

const SortByDropDown = () => {
  return (
      <ul className={styles.Dropdown}>
      <li><a href="#">Sort By <BsFillCaretDownFill /></a>
          <ul>
              <li><a href="">Revenue Generated 
                <BsFillCaretRightFill className={styles.Icon}/>
              </a>
              <ul>
                      <li><a href="">Highest First</a></li>
                      <li><a href="">Lowest First</a></li>
                  </ul>
              </li>
              <li><a href="">Most Recent Referal 
              <BsFillCaretRightFill className={styles.Icon}/></a>
                  <ul>
                      <li><a href="">Newest First</a></li>
                      <li><a href="">Oldest First</a></li>
                  </ul>
              </li>
          </ul>
      </li>
  </ul>
  )
}

export default SortByDropDown