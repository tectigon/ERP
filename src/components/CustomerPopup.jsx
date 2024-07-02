import React from "react";
import "./CustomerPopup.css";

const CustomerPopup = ({ onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <div className="form-head">

                    <h2>Create Customer</h2>
                    <button onClick={onClose}><i class="bi bi-x-lg"></i></button>
                </div>
                <form action="">
                    <input type="text" placeholder="Name" required />
                    <input type="text" placeholder="Shipping Address" required />
                    <input type="text" placeholder="Billing Address" required />
                    <input type="tel" placeholder="Phone Number" required />
                    <input type="tel" placeholder="Fax Number" />
                    <button type="submit">Create</button>
                </form>
            </div>
        </div>
    );
};

export default CustomerPopup;
