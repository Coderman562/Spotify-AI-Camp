import React from 'react';
import './index.css';

const TableData = [
  {
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '555-123-4567',
    email: 'john.doe@example.com',
    address: '123 Main St, Anytown, USA'
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    phoneNumber: '555-987-6543',
    email: 'jane.doe@example.com',
    address: '456 Elm St, Anytown, USA'
  }
  // Add more data rows as needed
];

const Table = () => {
  return (
    <div className="tableContainer">
      <table className="dataTable">
        <thead className="tableHeader">
          <tr>
            <th className="tableHeading">First Name</th>
            <th className="tableHeading">Last Name</th>
            <th className="tableHeading">Phone Number</th>
            <th className="tableHeading">Email</th>
            <th className="tableHeading">Address</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {TableData.map((row, index) => (
            <tr key={index}>
              <td className="tableData">{row.firstName}</td>
              <td className="tableData">{row.lastName}</td>
              <td className="tableData">{row.phoneNumber}</td>
              <td className="tableData">{row.email}</td>
              <td className="tableData">{row.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
