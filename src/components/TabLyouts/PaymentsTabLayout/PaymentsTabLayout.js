import React from 'react'
import TabLayout from '../TabLayout'
import PaymentTableContainer from '../../PaymentTableContainer'

const PaymentsTabLayout = () => {
    const tabs = [
        {
            title : "tab 01 tab 01 tab 01",
            component : 
                <div>
                    <div> Filters </div>
                    <PaymentTableContainer />
                </div>
        },
        {
            title : "tab 02 tab 02 tab 02" ,
            component :   <h1>Not Implemented Yet...</h1>
        },
        {
            title : "tab 03 tab 03 tab 03" ,
            component :   <h1>Not Implemented Yet...</h1>
        },
        {
            title : "tab 04 tab 04 tab 04" ,
            component :   <h1>Not Implemented Yet...</h1>
        }
    ]
  return (
    <TabLayout children={tabs}/>
  )
}

export default PaymentsTabLayout