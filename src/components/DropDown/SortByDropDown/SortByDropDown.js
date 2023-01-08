import React ,{useContext} from 'react'
import styles from '../DropDown.module.css'
import { BsFillCaretDownFill , BsFillCaretRightFill } from "react-icons/bs";
import {PaymentsContext}  from '../../../contexts/paymentsContext'
import {Sort_Type} from '../../../classes/enums'

const SortByDropDown = () => {
  const preventDefault = (e) => e.preventDefault();
  const {sortDataByDate,sortByRevenue} = useContext(PaymentsContext)

  const sortByRevenueDESC = (e) => {
    e.preventDefault();
    sortByRevenue(Sort_Type.DESC);
  }
  const sortByRevenueASC = (e) => {
    e.preventDefault();
    sortByRevenue(Sort_Type.ASC);
  }
  const sortDataByDateDESC = (e) =>{
    e.preventDefault();
    sortDataByDate(Sort_Type.DESC);
  }
  const sortDataByDateASC = (e) =>{
    e.preventDefault();
    sortDataByDate(Sort_Type.ASC);
  }
  return (
      <ul className={styles.Dropdown}>
      <li><a onClick={preventDefault}>Sort By <BsFillCaretDownFill /></a>
          <ul>
              <li><a onClick={preventDefault}>Revenue Generated 
                <BsFillCaretRightFill className={styles.Icon}/>
              </a>
              <ul>
                      <li><a href='#' onClick={sortByRevenueDESC}>
                            Highest First
                        </a></li>
                      <li><a href='#' onClick={sortByRevenueASC}>
                        Lowest First
                        </a></li>
                  </ul>
              </li>
              <li><a onClick={preventDefault}>Most Recent Referal 
              <BsFillCaretRightFill className={styles.Icon}/></a>
                  <ul>
                      <li><a href='' onClick={sortDataByDateDESC}>
                        Newest First
                        </a></li>
                      <li><a href='' onClick={sortDataByDateASC}>
                        Oldest First
                        </a></li>
                  </ul>
              </li>
          </ul>
      </li>
  </ul>
  )
}

export default SortByDropDown