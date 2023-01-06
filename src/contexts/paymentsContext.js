
import { type } from '@testing-library/user-event/dist/type';
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
        let tempPrevPaymentData = [...prevPaymentData];
        let tempPaymentData = [...paymentData];
        let index = tempPaymentData.findIndex(payment => payment.id === id)
        let prevIndex = tempPrevPaymentData.findIndex(payment => payment.id === id)
        let item = tempPaymentData[index]
        item.isChecked = state
        tempPaymentData[index] = item
        tempPrevPaymentData[prevIndex] = item
        setPrevPaymentData(tempPrevPaymentData)
        setPaymentData(tempPaymentData)
    }
    const setAllSelected = (state) => {
        let checkedData = paymentData.map(item => (
            {...item ,isChecked : state}
        ))
        let checkedDataIDs = paymentData.map(item => item.id)
        let checkedPrevData = prevPaymentData.map(item => {
            let exists = checkedDataIDs.includes(item.id)
            if(exists) item.isChecked = state
            return item
        })
        setPaymentData(checkedData)
        setPrevPaymentData(checkedPrevData)
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
    const sortDataTableByString = (type , field) => {
        let tempData = [...paymentData];
        switch(type){
            case Sort_Type.ASC:
                tempData.sort((a,b) => (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0))
                break;
            case Sort_Type.DESC:
                tempData.sort((a,b) => (a[field] < b[field]) ? 1 : ((b[field] < a[field]) ? -1 : 0))
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
    const sortByRevenue = (type) => sortDataTable(type, "revenue")
    const sortByAffiliateName = (type) => sortDataTableByString(type, "name")
    
    const filterByAffiliateName = (text) => filterByText(text , "name")

    const getStatistics = () => {
        let result = {total_paid_layout : 0 
                    , total_unpaid_layout : 0 
                    , total_ready_layout : 0 
                    , pending_payouts : 0}
        prevPaymentData.map(item => {
            result.total_paid_layout += item.paid_payouts
            result.total_unpaid_layout += item.unpaid_payouts
            result.total_ready_layout += item.ready_payouts
        })
        result.total_paid_layout = result.total_paid_layout.toFixed(2)
        result.total_unpaid_layout = result.total_unpaid_layout.toFixed(2)
        result.total_ready_layout = result.total_ready_layout.toFixed(2)
        result.pending_payouts = prevPaymentData.length
        return result;
    }
    return (
        <PaymentsContext.Provider 
            value={{headerData  , paymentData, prevPaymentData,
                    sortDataByDate, sortByRevenue, sortByAffiliateName,
                    filterByAffiliateName ,
                    setSelectedById, setAllSelected,
                    getStatistics}}>
            {props.children}
        </PaymentsContext.Provider>
    )
}

export default PaymentsContextProvider