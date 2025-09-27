import { useState, useEffect } from "react";
import { mockData } from "./mockData";
import "./SearchStyle.css";
import FilterComponent from "./FilterComponent";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [filters, setFilters] = useState({
    "Churn Risk": "",
    "Churn Risk_options": ["High", "Medium", "Low"],
    "Location": "",
    "Location_options": ["Bangalore, India", "Kolkata, India", "Delhi, India"],
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500); 

    return () => {
      clearTimeout(handler); // cleanup on re-render
    };
  }, [searchTerm]);


  // const filteredResults = mockData.filter((customer) =>
  //   customer.name?.toLowerCase().includes(debouncedTerm.toLowerCase())
  // );

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredResults = mockData
    .filter((customer) =>
      customer.name.toLowerCase().includes(debouncedTerm.toLowerCase())
    )
    .filter(
      (customer) =>
        (!filters["Churn Risk"] || customer.churnRisk === filters["Churn Risk"]) &&
        (!filters["Segment"] || customer.segment === filters["Segment"]) &&
        (!filters["Location"] || customer.location === filters["Location"])
    );

  return (
    <div className="search-container">
      <div className="search-filter-wrapper">
        <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <FilterComponent filters={filters} onFilterChange={handleFilterChange} />
      
      </div>

    { filteredResults && filteredResults.length > 0 &&
      <div className="grid-container">
        <div className="grid-header">
          <div>Name</div>
          <div>Location</div>
          <div>LTV</div>
          <div>Churn Risk</div>
        </div>
        
        {filteredResults.map((cust) => (
          <div key={cust?.customerId} className="grid-row">
            <div>{cust?.name}</div>
            <div>{cust?.location}</div>
            <div>{cust?.lifetimeValue}</div>
            <div>{cust?.churnRisk}</div>
          </div>
        ))}
      </div>}
    </div>
  );
};

export default SearchComponent;
