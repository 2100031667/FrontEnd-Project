// SortingAndFiltering.js
import React from 'react';

const SortingAndFiltering = ({ onSort, onFilter }) => {
  return (
    <div className="sorting-filtering-container">
      <div>
        <label htmlFor="showOptions">Showing:</label>
        <select id="showOptions" onChange={(e) => onFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="passed">Passed</option>
          <option value="failed">Failed</option>
        </select>
      </div>
      <div>
        <label htmlFor="sortBy">Sort by:</label>
        <select id="sortBy" onChange={(e) => onSort(e.target.value)}>
          <option value="nameAsc">Name (Ascending)</option>
          <option value="nameDesc">Name (Descending)</option>
          <option value="finalGradeAsc">Final Grade (Ascending)</option>
          <option value="finalGradeDesc">Final Grade (Descending)</option>
        </select>
      </div>
      <div>
        <label htmlFor="filterByName">Filter by name:</label>
        <input type="text" id="filterByName" onChange={(e) => onFilter(e.target.value)} />
      </div>
    </div>
  );
};

export default SortingAndFiltering;
