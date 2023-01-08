import React ,{useContext} from 'react'
import styles from '../DropDown.module.css'
import { BsFillCaretDownFill , BsFillCaretRightFill } from "react-icons/bs";
import {PaymentsContext}  from '../../../contexts/paymentsContext'
import {Sort_Type} from '../../../classes/enums'

const SortByDropDown = () => {
  const preventDefault = (e) => e.preventDefault();
  const {sortDataByDate,sortByRevenue} = useContext(PaymentsContext)
  return (
      <ul className={styles.Dropdown}>
      <li><a onClick={preventDefault}>Sort By <BsFillCaretDownFill /></a>
          <ul>
              <li><a onClick={preventDefault}>Revenue Generated 
                <BsFillCaretRightFill className={styles.Icon}/>
              </a>
              <ul>
                      <li><a href='#' onClick={()=>sortByRevenue(Sort_Type.DESC)}>
                            Highest First
                        </a></li>
                      <li><a href='#' onClick={()=>sortByRevenue(Sort_Type.ASC)}>
                        Lowest First
                        </a></li>
                  </ul>
              </li>
              <li><a onClick={preventDefault}>Most Recent Referal 
              <BsFillCaretRightFill className={styles.Icon}/></a>
                  <ul>
                      <li><a href='' onClick={() => sortDataByDate(Sort_Type.DESC)}>
                        Newest First
                        </a></li>
                      <li><a href='' onClick={() => sortDataByDate(Sort_Type.ASC)}>
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