import React from 'react'
import TabLayout from '../TabLayout'
import PaymentTableContainer from '../../PaymentTableContainer/PaymentTableContainer'

const PaymentsTabLayout = () => {
    const tabs = [
        {
            title : "Pending Payouts",
            component : 
                <div>
                    <PaymentTableContainer />
                </div>
        },
        {
            title : "Paid Payouts" ,
            component :   <h1>Not Implemented Yet...</h1>
        }
    ]
  return (
    <TabLayout children={tabs}/>
  )
}

export default PaymentsTabLayout