import React from 'react';

function VolunteerPage (){
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

    return (
    <table>
        <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Address</th>
        </tr>
        </thead>
        <tbody>
        {TableData.map((row, index) => (
            <tr key={index}>
            <td>{row.firstName}</td>
            <td>{row.lastName}</td>
            <td>{row.phoneNumber}</td>
            <td>{row.email}</td>
            <td>{row.address}</td>
            </tr>
        ))}
        </tbody>
    </table>
    );
};

export default VolunteerPage;
