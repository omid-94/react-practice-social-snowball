
import React, {useState , createContext, useEffect} from 'react'

export const PaymentsContext = createContext();

const PaymentsContextProvider = (props) => {
    const [headerData , setHeaderData] = useState(props.initialHeaderData)
    const [paymentData , setPaymentData] = useState(props.initialData)

    const setSelectedById = (id , state) => {
        let tempPaymentData = [...paymentData];
        let index = tempPaymentData.findIndex(payment => payment.id === id)
        let item = tempPaymentData[index]
        item.isChecked = state
        tempPaymentData[index] = item
        setPaymentData(tempPaymentData)
    }
    const setAllSelected = (state) => {
        let checkedData = paymentData.map(item => (
            {...item ,isChecked : state}
        ))
        setPaymentData(checkedData)
    }
    return (
        <PaymentsContext.Provider 
            value={{headerData  , paymentData,
                    setSelectedById, setAllSelected}}>
            {props.children}
        </PaymentsContext.Provider>
    )
}

export default PaymentsContextProvider