import React , {useContext} from 'react'
import styles from '../../styles/payments.module.css'
import TableRow from './TableRow'

const TableBody = ({data}) => {
    return (
        <tbody>
        {data.map((item , index) => {
            return <TableRow key={index} dataItem={item}/>
        })}
        </tbody>
    )
}

export default TableBody