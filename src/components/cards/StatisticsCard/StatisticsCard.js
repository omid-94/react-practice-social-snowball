import React from 'react'
import styles from './StatisticsCard.module.css'

const StatisticsCard = ({heading ,buttonName, buttonAction
                        ,amount,amountColor = "black" }) => {
  return (
    <div className={styles.Container}>
        <div className={styles.Heading}>
            {heading}
        </div>
        <div className={styles.Info_Container}>
            <div className={styles.Amouont}>
                <h2 style={{color : amountColor}}> 
                    {"$" + amount} 
                </h2>
            </div>
            <div className={styles.Button_container}>
                {buttonName ? 
                <button className={styles.ActionButton} onClick={() => buttonAction()}>
                    {buttonName}
                </button>
                : null}
            </div>
        </div>
    </div>
  )
}

export default StatisticsCard