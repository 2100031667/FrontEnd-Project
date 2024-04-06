// MainBlock.js
import React, { useState } from 'react';
import Table from './Table';
import SortingAndFiltering from './SortingAndFiltering';
import StatisticsBlock from './StatisticsBlock';

const MainBlock = ({ studentData }) => {
  const [filteredData, setFilteredData] = useState(studentData);
  const [showStatistics, setShowStatistics] = useState(false);

  // Sorting function
  const handleSort = (sortCriteria) => {
    let sortedData = [...filteredData];
    switch (sortCriteria) {
      case 'nameAsc':
        sortedData.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'nameDesc':
        sortedData.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'finalGradeAsc':
        sortedData.sort((a, b) => a.finalGrade - b.finalGrade);
        break;
      case 'finalGradeDesc':
        sortedData.sort((a, b) => b.finalGrade - a.finalGrade);
        break;
      default:
        break;
    }
    setFilteredData(sortedData);
  };

  // Filtering function
  const handleFilter = (filterCriteria) => {
    let filteredData = [...studentData];
    switch (filterCriteria) {
      case 'passed':
        filteredData = studentData.filter(student => student.finalGrade >= 4);
        break;
      case 'failed':
        filteredData = studentData.filter(student => student.finalGrade < 4);
        break;
      default:
        break;
    }
    setFilteredData(filteredData);
  };

  // Handler for showing statistics
  const handleShowStatistics = () => {
    setShowStatistics(true);
  };

  // Handler for hiding statistics
  const handleHideStatistics = () => {
    setShowStatistics(false);
  };

  // Calculate final grades for all students
  const calculateFinalGrade = (examGrade, ratingGrade) => {
    return 0.6 * examGrade + 0.4 * ratingGrade;
  };

  const tableData = filteredData.map(student => ({
    ...student,
    finalGrade: calculateFinalGrade(student.examGrade, student.ratingGrade)
  }));

  return (
    <main className="main-container">
      <SortingAndFiltering onSort={handleSort} onFilter={handleFilter} />
      <Table data={tableData} />
      {showStatistics && <StatisticsBlock studentData={studentData} />}
      {!showStatistics ? <button onClick={handleShowStatistics}>Show Statistics</button> : <button onClick={handleHideStatistics}>Hide Statistics</button>}
    </main>
  );
};

export default MainBlock;
