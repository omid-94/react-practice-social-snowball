
import React, {useState , createContext, useEffect} from 'react'
import {Sort_Type} from '../classes/enums'

export const PaymentsContext = createContext();

const PaymentsContextProvider = (props) => {
    const [headerData , setHeaderData] = useState(props.initialHeaderData)
    const [paymentData , setPaymentData] = useState(props.initialData)
    const [prevPaymentData , setPrevPaymentData] = useState(props.initialData)

    useEffect(() => {
        if(paymentData.length === prevPaymentData.length)
            setPrevPaymentData(paymentData)
    },[paymentData])

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
    const sortDataTable = (type , field) => {
        let tempData = [...paymentData];
        switch(type){
            case Sort_Type.ASC:
                tempData.sort((a,b) => a[field] - b[field])
                break;
            case Sort_Type.DESC:
                tempData.sort((a,b) => b[field] - a[field])
                break;
        }
        setPaymentData(tempData)
    }

    const filterByText = (text , field) => {
        let tempData = [...prevPaymentData];
        tempData = tempData.filter(item => item[field].includes(text))
        setPaymentData(tempData)
    }
    const sortDataByDate = (type) => sortDataTable(type , "latest_referral_DT")
    
    const sortByRevenue= (type) => sortDataTable(type, "revenue")
    
    const filterByAffiliateName = (text) => filterByText(text , "name")
    return (
        <PaymentsContext.Provider 
            value={{headerData  , paymentData, prevPaymentData,
                    sortDataByDate, sortByRevenue,
                    filterByAffiliateName ,
                    setSelectedById, setAllSelected}}>
            {props.children}
        </PaymentsContext.Provider>
    )
}

export default PaymentsContextProvider