import React, { useState } from 'react'
import styles from './TabLayout.module.css'
const TabLayout = ({children = []}) => {
  const [acitiveIndex , setAcitiveIndex] = useState(0)

  const TabButtons = (<div className={styles.TabButtonContainer}>
      {children.map((item, index) => {
        return <div key={index}>
            <button className={styles.TabButton} 
                    onClick={() => setAcitiveIndex(index)}>
              {item.title}
            </button>
            <div className={styles.UnderlineActive} 
                 style={{display : acitiveIndex === index ? "block": "none"}}/>
          </div>
      })}
    </div>)
  const TabContents = (<div className={styles.TabContentContainer}>
    {children.map((item,index) => {
      return <div key={index} 
                  className={styles.TabContent}
                  style={{display : acitiveIndex === index ? "block": "none"}}>
        {item.component}
      </div>
    })}
  </div>)

  return (
    <div className={styles.TabContainer}>
      {TabButtons}
      {TabContents}
    </div>
  )
}

export default TabLayout