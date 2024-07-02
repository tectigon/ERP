import React from 'react';
import './finance.css'

import { GiReceiveMoney } from "react-icons/gi";
import { BsCurrencyRupee } from "react-icons/bs";

function FinancePage() {
    return (
        <div className="finance-container">
            <div className="main " id='main'>
                <div className="finance-content">


                    <div>

                        <h3>Your Total Balance</h3>
                        <p>Take a look at your statistics</p>
                    </div>
                    <div className='finance-stats'>
                        <div className='left-stats'>
                            <h3>$4343</h3>
                            <span>$23232(+2.5%)</span>
                        </div>
                        <div className='stats'>
                            <GiReceiveMoney className='icon'/>
                            <h4>$3232</h4>
                            <p>Income from Investment</p>
                        </div>
                        <div className='stats'>
                            <BsCurrencyRupee className='icon'/>
                            <h4>$3232</h4>
                            <p>Income from Accounts</p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default FinancePage
