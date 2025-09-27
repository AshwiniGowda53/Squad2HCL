const FilterComponent = ({ filters, onFilterChange }) => {

    const mainKeys = Object.keys(filters).filter((key) => !key.endsWith("_options"));

  return (
    <div className="filter-container">
     {mainKeys.map((key) => (
        <div key={key} className="filter-item">
          <label>{key}:</label>
          <select
            value={filters[key]}
            onChange={(e) => onFilterChange(key, e.target.value)}
          >
            <option value="">All</option>
            {filters[key + "_options"].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default FilterComponent;
