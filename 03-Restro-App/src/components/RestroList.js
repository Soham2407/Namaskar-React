import { useState } from "react";
import { RestroData } from "../data/data";
import RestroCard from "./RestroCard";

const RestroList = () => {
  const [searchText, setSearchText] = useState("");
  const [filterData, setFilterData] = useState(RestroData);

  const searchHandler = () => {
    const searchData = filterData?.filter((data) =>
      data?.name?.toLowerCase().includes(searchText?.toLowerCase())
    );

    if (searchText === "") {
      setFilterData(RestroData);
    } else {
      setFilterData(searchData);
    }
  };
  return (
    <>
      <div className="main-container">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={searchHandler}>Search</button>
        </div>
        <div className="restro-list">
          {filterData?.map((item) => {
            return <RestroCard {...item} key={item?.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default RestroList;
