import React, { useEffect, useState } from 'react';
import './index.css';
import Table from './VolunteerPageComponents/Table.jsx';
import TableHeader from './VolunteerPageComponents/TableHeader.jsx';

const TableData = [
  {
    user_doc_id: '1',
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '555-123-4567',
    email: 'john.doe@example.com',
    address: '123 Main St, Anytown, USA'
  },
  {
    user_doc_id: '2',
    firstName: 'Jane',
    lastName: 'Doe',
    phoneNumber: '555-987-6543',
    email: 'jane.doe@example.com',
    address: '456 Elm St, Anytown, USA'
  }
  // Add more data rows as needed
];

function VolunteerPage() {
  const [tableData, setTableData] = useState([]);
  const [tableConfig, setTableConfig] = useState([
    user_doc_id= true,
    firstName= true,
    lastName= true,
    phoneNumber= true,
    email= true,
    address= true
  ]);

  // useEffect (() => {
  //   fetch('/api/submit-form', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(tableData)
  //   });
  // }, [tableData]);

  const tableRows = TableData.map(item => (
      <Table
        user_doc_id={item.user_doc_id}
        firstName={item.firstName}
        lastName={item.lastName}
        phoneNumber={item.phoneNumber}
        email={item.email}
        address={item.address}
      />
      )
    );

  return (
  <div className="tableContainer">
    <table className="dataTable">
      <thead className="tableHeader">
        <TableHeader />
      </thead>
      <tbody className="tableBody">
        {tableRows}
      </tbody>
    </table>
  </div>
  );
};

export default VolunteerPage;
