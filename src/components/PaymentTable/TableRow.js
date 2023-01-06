import React , {useContext} from 'react'
import styles from '../../styles/payments.module.css'
import { PaymentsContext } from '../../contexts/paymentsContext'

const TableRow = ({dataItem}) => {
    const isChecked = dataItem.isChecked;
    const checkboxKey = "isChecked";
    const {headerData , setSelectedById} = useContext(PaymentsContext)
    const checkChenged = (e) => {
        setSelectedById(dataItem.id , e.target.checked)
    }
    return (
      <tr className={styles.Row}>
          {headerData.map((headerItem , j) => {
            const keyName = headerData[j].key
            return <td key={j}>
              {keyName === checkboxKey ?
                  <input type="checkbox" 
                    checked={isChecked} 
                    onChange={checkChenged}
                  />
                   : dataItem[keyName]
              }
              </td>
          })}
      </tr>
    )
}

export default TableRow