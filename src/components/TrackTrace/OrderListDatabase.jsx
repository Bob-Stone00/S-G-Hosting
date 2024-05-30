import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './styles.css';

const OrderListDatabase = () => {
  const [selectedValue, setSelectedValue] = useState('Pending Shipments'); // Initial selected value

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const generatePDF = () => {
    const doc = new jsPDF(); // Create a new PDF document

    // Logic based on selectedValue
    if (selectedValue === 'Pending Shipments') {
      // Fetch or generate data for Pending Shipments
      const pendingData = [
        { orderID: 1234, customerName: 'Lunga', items: ['Nike Air Force 1s', 'Cleaning Spray 1x'], conditions: 'New', ProductId: '23-67-99',From:'Pretoria(Danville)',To:'Johannesburg(Lakeston)'},
        { orderID: 4582, customerName: 'Tumi', items: ['Adidas Dunk Lows 1s', 'Crocks'], conditions: 'New', ProductId: '23-67-92',From:'Pretoria(Danville)',To:'Johannesburg(Lakeston)'},
        { orderID: 9632, customerName: 'Amo', items: ['Tv', '65" LED'], conditions: 'New', ProductId: '23-67-94',From:'Pretoria(Danville)',To:'Johannesburg(Lakeston)' },
        { orderID: 7891, customerName: 'James', items: ['PS5', 'Joy-Sticks'], conditions: 'New', ProductId: '23-67-9w',From:'Pretoria(Danville)',To:'Johannesburg(Lakeston)' },
        { orderID: 1234, customerName: 'John', items: ['Cofee', '5 roses'], conditions: 'New', ProductId: '23-67-99',From:'Pretoria(Danville)',To:'Johannesburg(Lakeston)' },
      ];

      // Add a title for the section
      doc.setFontSize(18);
      doc.text('Pending Shipments', 14, 22);

      // Prepare data for autoTable
      const tableData = pendingData.map(order => [
        order.orderID,
        order.customerName,
        order.conditions,
        order.ProductId,
        order.items.join(', '),
        order.From,
        order.To,
      ]);

      // Add table with autoTable
      doc.autoTable({
        startY: 30,
        head: [['Order ID', 'Customer', 'Condition', 'Product ID', 'Items','From','To']],
        body: tableData,
        theme: 'grid',
        styles: { fontSize: 10, cellPadding: 2 },
        headStyles: { fillColor: [22, 160, 133] },
        alternateRowStyles: { fillColor: [240, 240, 240] },
        margin: { top: 30 }
      });

    } else if (selectedValue === 'Returned Shipments') {
      
      const ReturnedData = [
        { orderID: 1234, customerName: 'Lunga', items: ['Nike Air Force 1s', 'Cleaning Spray 1x'], conditions: 'New', ProductId: '23-67-99' },
        { orderID: 4582, customerName: 'Tumi', items: ['Adidas Dunk Lows 1s', 'Crocks'], conditions: 'New', ProductId: '23-67-92' },
        { orderID: 9632, customerName: 'Amo', items: ['Tv', '65" LED'], conditions: 'New', ProductId: '23-67-94' },
        { orderID: 7891, customerName: 'James', items: ['PS5', 'Joy-Sticks'], conditions: 'New', ProductId: '23-67-9w' },
        { orderID: 1234, customerName: 'John', items: ['Cofee', '5 roses'], conditions: 'New', ProductId: '23-67-99' },
      ];

      
      doc.setFontSize(18);
      doc.text('Returned Shipments', 14, 22);

     
      const tableData1 = ReturnedData.map(order => [
        order.orderID,
        order.customerName,
        order.conditions,
        order.ProductId,
        order.items.join(', ')
      ]);

    
      doc.autoTable({
        startY: 30,
        head: [['Order ID', 'Customer', 'Condition', 'Product ID', 'Items']],
        body: ReturnedData,
        theme: 'grid',
        styles: { fontSize: 10, cellPadding: 2 },
        headStyles: { fillColor: [22, 160, 133] },
        alternateRowStyles: { fillColor: [240, 240, 240] },
        margin: { top: 30 }
      });

    } else if (selectedValue === 'Scheduled Shipments') {

      const Scheduleddata = [
        { orderID: 1234, customerName: 'Lunga', items: ['Nike Air Force 1s', 'Cleaning Spray 1x'], conditions: 'New', ProductId: '23-67-99',From:'Pretoria(Danville)',To:'Johannesburg(Lakeston)'},
        { orderID: 4582, customerName: 'Tumi', items: ['Adidas Dunk Lows 1s', 'Crocks'], conditions: 'New', ProductId: '23-67-92',From:'Pretoria(Danville)',To:'Johannesburg(Lakeston)'},
        { orderID: 9632, customerName: 'Amo', items: ['Tv', '65" LED'], conditions: 'New', ProductId: '23-67-94',From:'Pretoria(Danville)',To:'Johannesburg(Lakeston)' },
        { orderID: 7891, customerName: 'James', items: ['PS5', 'Joy-Sticks'], conditions: 'New', ProductId: '23-67-9w',From:'Pretoria(Danville)',To:'Johannesburg(Lakeston)' },
        { orderID: 1234, customerName: 'John', items: ['Cofee', '5 roses'], conditions: 'New', ProductId: '23-67-99',From:'Pretoria(Danville)',To:'Johannesburg(Lakeston)' },
      ];

      
      doc.setFontSize(18);
      doc.text('Scheduled Shipments', 14, 22);

     
      const tableData2 = Scheduleddata.map(order => [
        order.orderID,
        order.customerName,
        order.conditions,
        order.ProductId,
        order.From,
        order.To,
        order.items.join(', ')
      ]);

    
      doc.autoTable({
        startY: 30,
        head: [['Order ID', 'Customer', 'Condition', 'Product ID', 'Items','From','To']],
        body: Scheduleddata,
        theme: 'grid',
        styles: { fontSize: 10, cellPadding: 2 },
        headStyles: { fillColor: [22, 160, 133] },
        alternateRowStyles: { fillColor: [240, 240, 240] },
        margin: { top: 30 }
      });

    } else if (selectedValue === 'Successful Shipments') {
      
    } else {
      console.error('Unexpected selected value:', selectedValue);
    }

    // Save the PDF document with a filename based on selectedValue
    doc.save(`${selectedValue}.pdf`);

    alert('PDF generated successfully!');
  };

  return (
    <div className="track-and-tracing-OrderListDataBase-div">
      <div className="track-and-tracing-OrderListDataBase-div-inner1">
        <img
          src="Images/bx-plus-circle.svg"
          alt="Add Order"
          height="20"
          width="20"
          style={{ backgroundColor: 'rgb(178, 178, 255)', borderRadius: '20px', padding: '3px', marginTop: '5px' }}
        />
        <div>
          <h4>Order List Database</h4>
          <p>Tuesday 14, May 2023</p>
        </div>
      </div>

      <div className="track-and-tracing-OrderListDataBase-div-inner2">
        <select value={selectedValue} onChange={handleChange}>
          <option value="Pending Shipments">Pending Shipments</option>
          <option value="Returned Shipments">Returned Shipments</option>
          <option value="Scheduled Shipments">Scheduled Shipments</option>
          <option value="Successful Shipments">Successful Shipments</option>
        </select>

        <button style={{ border: '1px solid black', backgroundColor: 'white' }} onClick={generatePDF}>
          Download Reports
        </button>

        <button style={{ backgroundColor: 'blueviolet', color: 'white' }}>Create Shipment</button>
      </div>
    </div>
  );
};

export default OrderListDatabase;
