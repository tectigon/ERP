import React, { useState } from 'react';
import './production.css';
import AllproductionMain from './AllproductionMain';
import WorkOrders from './WorkOrders';
import SubContract from './SubContract';
import BillOfMaterials from './BillOfMaterials';

function AllProduction() {
    const [activeTab, setActiveTab] = useState('AllproductionMain');

    const renderContent = () => {
        switch (activeTab) {
            case 'AllproductionMain':
                return <AllproductionMain />;
            case 'WorkOrders':
                return <WorkOrders />;
            case 'SubContract':
                return <SubContract />;
            case 'BillOfMaterials':
                return <BillOfMaterials />;
            default:
                return <AllProductionProcess />;
        }
    };

    return (
        <div className='main' id='main'>
            <div className="production-container">
                <h4> Production</h4>
                <div className="production-nav-cards">
                    <div className="single-production-card" onClick={() => setActiveTab('AllproductionMain')}>
                        <h3>All Production Process</h3>
                    </div>
                    <div className="single-production-card" onClick={() => setActiveTab('WorkOrders')}>
                        <h3>Work Orders</h3>
                    </div>
                    <div className="single-production-card" onClick={() => setActiveTab('SubContract')}>
                        <h3>Sub Contract</h3>
                    </div>
                    <div className="single-production-card" onClick={() => setActiveTab('BillOfMaterials')}>
                        <h3>Bill Of Materials</h3>
                    </div>
                </div>
                <div className="production-content">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default AllProduction;
