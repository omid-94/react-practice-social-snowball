import React,{useContext} from 'react'
import styles from '../DropDown.module.css'
import { BsFillCaretDownFill } from "react-icons/bs";
import {PaymentsContext} from '../../../contexts/paymentsContext'

const ActionDropDown = () => {
  const preventDefault = (e) => e.preventDefault();
  const {setShowModal}= useContext(PaymentsContext)

  const sendPayout = (e) => {
    preventDefault(e);
    setShowModal(true)
  }
  return (
    <ul className={styles.Dropdown + " " + styles.Actions}>
      <li><a  onClick={preventDefault}>Actions <BsFillCaretDownFill /></a>
          <ul>
              <li><a className={styles.Button_Border} onClick={preventDefault}>Mark As Paid</a></li>
              <li><a className={styles.Button_Border} onClick={preventDefault}>Reject</a></li>
              <li><a onClick={sendPayout}>Send Payouts</a></li>
          </ul>
      </li>
  </ul>
  )
}

export default ActionDropDown