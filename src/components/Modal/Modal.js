import React from 'react'
import styles from './Modal.module.css'

const Modal = ({children , setShow}) => {
  return (
    <div className={styles.Container}
        onClick={() => setShow(false)}>
        <div className={styles.ModalContainer}
            onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default Modal