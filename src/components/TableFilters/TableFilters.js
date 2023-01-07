import React from 'react'
import styles from './TableFilters.module.css';

const TableFilters = () => {
  return (
    <div className={styles.Container}>
        <div className={styles.LeftHandSide}>
            <button >Button 01 </button>
            <button >Button 01 </button>
            <button >Button 01 </button>
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