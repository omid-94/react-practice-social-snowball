import React , {useContext} from 'react'
import Modal from '../Modal'
import styles from './PaymentModal.module.css'
import { RiSendPlaneFill } from "react-icons/ri";
import { MdArrowBackIosNew } from "react-icons/md";
import { PaymentsContext } from '../../../contexts/paymentsContext';

const PaymentModal = ({setShouldShow}) => {
  const {setShowModal}= useContext(PaymentsContext)
  return (
    <Modal setShow={setShowModal}>
        <div className={styles.ModalContainer}>
          <div className={styles.ModalHeader}>
            <div className={styles.BackButtonContainer}> 
            <button className={styles.BackButton} onClick={() => setShowModal(false)}>
              <div className={styles.BackButtonItems}>
                <MdArrowBackIosNew className={styles.BackButtonIcon}/> Back
              </div>
            </button>
            </div>
            <h3 className={styles.Title}>
              Confirm Payouts
            </h3>
          </div>
          <div className={styles.ModalBody}>
            omid omdi omid
          </div>
          <div className={styles.ModalFooter}>
            <button>
              Send Payouts &nbsp;<RiSendPlaneFill className={styles.SendIcon}/>
            </button>
          </div>
        </div>
    </Modal>
  )
}

export default PaymentModal