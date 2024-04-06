// StatisticsBlock.js
import React from 'react';

const StatisticsBlock = ({ studentData }) => {
  // Calculate statistics based on studentData
  const totalStudents = studentData.length;
  const passedStudents = studentData.filter(student => student.finalGrade >= 4).length;
  const failedStudents = totalStudents - passedStudents; // Calculate failed students correctly
  const averageGrade = calculateAverageGrade(studentData);
  const maxGrade = calculateMaxGrade(studentData);
  const minGrade = calculateMinGrade(studentData);

  return (
    <div className="statistics-container">
      <h2>Statistics</h2>
      <p>Total Students: {totalStudents}</p>
      <p>Passed Students: {passedStudents}</p>
      <p>Failed Students: {failedStudents}</p>
      <p>Average Grade: {averageGrade}</p>
      <p>Max Grade: {maxGrade}</p>
      <p>Min Grade: {minGrade}</p>
    </div>
  );
};

// Utility functions for calculating statistics
const calculateAverageGrade = (data) => {
  const total = data.reduce((sum, student) => sum + student.finalGrade, 0);
  return total / data.length;
};

const calculateMaxGrade = (data) => {
  return Math.max(...data.map(student => student.finalGrade));
};

const calculateMinGrade = (data) => {
  return Math.min(...data.map(student => student.finalGrade));
};

export default StatisticsBlock;
