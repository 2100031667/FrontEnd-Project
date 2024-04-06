// Table.js
import React from 'react';

const Table = ({ data }) => {
  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Ticket Number</th>
          <th>Rating Grade</th>
          <th>Exam Grade</th>
          <th>Final Grade</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((student, index) => (
          <tr key={student.id}>
            <td>{index + 1}</td>
            <td>{student.name}</td>
            <td>{student.ticketNumber}</td>
            <td>{student.ratingGrade}</td>
            <td>{student.examGrade}</td>
            <td>{student.finalGrade}</td>
            <td>{student.finalGrade >= 4 ? 'Passed' : 'Failed'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
