import React, { useState } from "react";

function SortMenu({ sortBy, setSortBy, order, setOrder }) {
  const options = [
    { label: "Date", value: "created_at" },
    { label: "Votes", value: "votes" },
  ];

  return (
    <form id="sort-menu">
      <label htmlFor="sortBy">Sort By: </label>
      <select name="sortBy" id="sortby" defaultValue={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label htmlFor="order">In order:</label>
      <select name="order" id="order" defaultValue={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="desc">descending</option>
        <option value="asc">ascending</option>
      </select>
    </form>
  );
}

export default SortMenu;
