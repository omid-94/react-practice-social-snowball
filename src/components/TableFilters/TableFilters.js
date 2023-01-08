import React from 'react'
import styles from './TableFilters.module.css';
import {FilterByDropDown , ActionDropDown , SortByDropDown} from '../DropDown'

const TableFilters = () => {
  return (
    <div className={styles.Container}>
        <div className={styles.LeftHandSide}>
          <SortByDropDown />
          <FilterByDropDown />
          <ActionDropDown />
        </div>
        <div className={styles.EmptySpace}/>
        <div className={styles.RightHandSide}>
            <input type={"text"} />
            <button >Button 01 </button>
        </div>
    </div>
  )
}

export default TableFilters