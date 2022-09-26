import React from "react";

const Sidebar = () => {
  
  return (
    <div style={{ minWidth: "250px" }}>
      <h3>Sort By</h3>
      <div>
          <input type="radio" data-cy="asc" value="asc" name="sort" />
          <label>Ascending</label>
      </div>
      <div>
          <input type="radio" data-cy="desc" value="desc" name="sort"/>
          <label>Descending</label>
      </div>
    </div>
  );
};

export default Sidebar;
