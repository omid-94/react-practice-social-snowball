import React from 'react'
import styles from './TableFilterButton.module.css'

const TableFilterButton = ({text , onClick}) => {
  return (
    <button className={styles.FilterButton} onClick={onClick}>
        <h6> {text} </h6>
    </button>
  )
}

export default TableFilterButton