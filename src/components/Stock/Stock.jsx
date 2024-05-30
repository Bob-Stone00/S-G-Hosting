import React, { useEffect, useState } from "react";
import MOCK_DATA from "../../MOCK_DATA.json";
import "./Stock.css";

function Stock({
  setTotalCost,
  setUnfulfilledCount,
  setFulfilledCount,
  setTotalOrders,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [customerSearchQuery, setCustomerSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(MOCK_DATA);

  useEffect(() => {
    // Calculate the total cost, stripping the dollar sign before parsing
    const total = MOCK_DATA.reduce((acc, order) => {
      const amount = parseFloat(order.Total.replace(/[^0-9.-]+/g, "")) || 0;
      return acc + amount;
    }, 0);
    setTotalCost(total);
  }, [setTotalCost]);

  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();

    const filtered = MOCK_DATA.filter((order) => {
      const fulfillmentState = order["Fulfillment state"]
        ? "fulfilled"
        : "unfulfilled";
      return (
        lowerCaseQuery === "" ||
        fulfillmentState.toLowerCase() === lowerCaseQuery
      );
    });

    setFilteredData(filtered);
  }, [searchQuery]);

  useEffect(() => {
    const lowerCaseCustomerQuery = customerSearchQuery.toLowerCase();
    const filtered = MOCK_DATA.filter((order) => {
      const customerName = order.Customer.toLowerCase();
      return (
        lowerCaseCustomerQuery === "" ||
        customerName.includes(lowerCaseCustomerQuery)
      );
    });
    setFilteredData(filtered);
  }, [customerSearchQuery]);

  useEffect(() => {
    const unfulfilledOrders = MOCK_DATA.filter(
      (order) => !order["Fulfillment state"]
    );
    const fulfilledOrders = MOCK_DATA.filter(
      (order) => order["Fulfillment state"]
    );

    const uniqueUnfulfilledCustomers = [
      ...new Set(unfulfilledOrders.map((order) => order.Customer)),
    ];
    const uniqueFulfilledCustomers = [
      ...new Set(fulfilledOrders.map((order) => order.Customer)),
    ];

    setUnfulfilledCount(uniqueUnfulfilledCustomers.length);
    setFulfilledCount(uniqueFulfilledCustomers.length);
    setTotalOrders(MOCK_DATA.length);
  }, [setUnfulfilledCount, setFulfilledCount, setTotalOrders]);

  return (
    <div className="box66">
      <div className="stock-table">
        
        <div className="moveinput">
          <input
            type="text"
            className="fulfillment_state"
            placeholder="Search by fulfillment state...🔎 fulfilled OR unfulfilled"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Search by customer...🔎 (type the name on 'customer')"
            value={customerSearchQuery}
            onChange={(e) => setCustomerSearchQuery(e.target.value)}
          />
        </div>

        <table>
          <thead>
            <tr>
              <th className="orderID">Order ID</th>
              <th>Customer</th>
              <th className="fulfillmentstat">Fulfillment State</th>
              <th className="paymentstat">Payment Status</th>
              <th className="total">Total</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((order) => (
                <tr key={order.Order_id}>
                  <td>{order.Order_id}</td>
                  <td>{order.Customer}</td>
                  <td>
                    <p
                      className={
                        order["Fulfillment state"] ? "fulfil" : "unfulfil"
                      }
                    >
                      {order["Fulfillment state"] ? "fulfilled" : "unfulfilled"}
                    </p>
                  </td>
                  <td
                    className={
                      order["Payment Status"] === "paid fully"
                        ? "complete"
                        : "incomplete"
                    }
                  >
                    {order["Payment Status"]}
                  </td>
                  <td>{order.Total}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  source does not exist
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Stock;
