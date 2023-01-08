import React, { useState,useContext } from 'react'
import styles from './TableFilters.module.css';
import {FilterByDropDown , ActionDropDown , SortByDropDown} from '../DropDown'
import TableFilterButton from '../Buttons/TableFilterButton/TableFilterButton';
import {PaymentsContext}  from '../../contexts/paymentsContext'

const TableFilters = () => {
  const {filterByAffiliateName} = useContext(PaymentsContext)
  const [filterText , setFilterText] = useState("")

  return (
    <div className={styles.Container}>
        <div className={styles.LeftHandSide}>
          <SortByDropDown />
          <FilterByDropDown />
          <ActionDropDown />
        </div>
        <div className={styles.EmptySpace}/>
        <div className={styles.RightHandSide}>
            <input type={"text"} onChange={(e) => setFilterText(e.target.value)}
                   style={{borderRadius : "7px", width : "200px" , textIndent : "5px"}}
                   placeholder={"Affiliate's name or email"} />
            <TableFilterButton text={"Search"} 
                              onClick={() => filterByAffiliateName(filterText)}/>
            <TableFilterButton text={"Export"} />
        </div>
    </div>
  )
}

export default TableFilters