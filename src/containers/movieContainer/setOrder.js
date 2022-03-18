import React from 'react';
import "./index.scss";

const SetOrder = ({changeOrder, orderSelect}) => {
    return (
        <>
            <div className="orderSelectStyle">
                <label>Order Of Movies: </label>
                <select name="order" onChange={changeOrder}>
                    <option value="">Please enter a valid choice</option>
                    {
                        orderSelect && Object?.keys(orderSelect)?.map((orderData, key) => {
                            return (
                                <option key={key} value={orderSelect[orderData]?.valueToOrderBy}>{orderSelect[orderData]?.label}</option>
                            )
                    })}
                </select>
            </div>
        </>
    )
}

export default SetOrder;