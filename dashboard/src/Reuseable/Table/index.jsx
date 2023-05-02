import React, { useState } from "react";
import Actions from "../Actions";
import Pagination from "../Pagination";
import DataNotFound from "../../assets/images/404-error.png";
import { DatePicker } from "antd";
import moment from "moment";

const Table = ({
  columns,
  data,
  itemsPerPage,
  setItemsPerPage,
  onDelete,
  onEdit,
}) => {
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const { RangePicker } = DatePicker;

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [startDateClick, setStartDateClick] = useState("");
  const [endDateClick, setEndDateClick] = useState("");

  const handleSort = (column) => {
    if (column === sortedColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortedColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedData = data.sort((a, b) => {
    const valueA = a[sortedColumn];
    const valueB = b[sortedColumn];

    if (typeof valueA === "string" && typeof valueB === "string") {
      // Use localeCompare for string comparison
      return sortDirection === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    } else {
      // Use standard comparison for numbers or other types
      return sortDirection === "asc" ? valueA - valueB : valueB - valueA;
    }
  });

  // Calculate pagination variables
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };
  const handleEdit = (id) => {
    onEdit(id);
  };

  const handleCalendarChange = (value, dateString) => {
    setStartDate(dateString[0]);
    setEndDate(dateString[1]);
  };

  const onButtonClick = () => {
    setStartDate(startDateClick);
    setEndDate(endDateClick);
  };

  const filterDataInDateRange = (data) => {
    if (startDate === "" && endDate === "") {
      return data;
    } else {
      const newData = data.filter((item) => {
        const isWithinRange = moment(item.createdAt, "YYYY/MM/DD").isBetween(
          moment(startDate, "YYYY/MM/DD"),
          moment(endDate, "YYYY/MM/DD"),
          null,
          "[]"
        );
        return isWithinRange;
      });
      return newData;
    }
  };

  const handelSearch = (data) => {
    if (searchValue === "") {
      return data;
    } else if (searchValue !== "") {
      const results = data.filter((item) => {
        // Loop through all the properties of the object and check if the search term is included
        for (const property in item) {
          if (
            item[property] &&
            item[property]
              .toString()
              .toLowerCase()
              .includes(searchValue.toLowerCase())
          ) {
            return true;
          }
        }
        return false;
      });
      // Return the array of matching objects
      return results;
    }
  };

  const allFilter = (data) => {
    const newData = handelSearch(filterDataInDateRange(data));
    return newData;
  };

  return (
    <>
      {data.length === 0 ? (
        <>
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <div>
                  <div className="row justify-content-center">
                    <div className="col-sm-4">
                      <div className="error-img">
                        <img
                          src={DataNotFound}
                          alt=""
                          className="img-fluid mx-auto d-block"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="text-uppercase mt-4">Sorry, No Data found</h4>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="row w-30 mb-3">
            <div className="col-6">
              <div className="d-flex" style={{ alignItems: "center" }}>
                <div className="row w-30 mb-3">
                  <div
                    className="col-3"
                    style={{
                      justifyContent: "center",
                      alignContent: "center !important",
                    }}
                  >
                    <label
                      style={{
                        fontWeight: "normal",
                        whiteSpace: "nowrap",
                        width: "150px",
                        alignItems: "center",
                      }}
                    >
                      Show :
                    </label>
                  </div>

                  <div className="col-5">
                    <select
                      className="form-select form-select-sm"
                      value={itemsPerPage}
                      onChange={(e) => setItemsPerPage(e.target.value)}
                      defaultValue="10"
                    >
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex" style={{ justifyContent: "end" }}>
                <div className="row" style={{ justifyContent: "end" }}>
                  <div
                    className="col-2"
                    style={{
                      justifyContent: "center",
                      alignContent: "center !important",
                    }}
                  >
                    <label
                      style={{
                        fontWeight: "normal",
                        whiteSpace: "nowrap",
                        width: "150px",
                        alignItems: "center",
                      }}
                    >
                      Search:
                    </label>
                  </div>
                  <div className="col-5">
                    <input
                      type="search"
                      className="form-control form-control-sm"
                      placeholder=""
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex" style={{ justifyContent: "end" }}>
            <div className="row  mb-3" style={{ justifyContent: "end" }}>
              <div className="float-end">
                <div className="mb-3">
                  <RangePicker
                    allowClear="true"
                    onCalendarChange={handleCalendarChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-centered table-nowrap mb-0">
              <thead className="table-light">
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column}
                      onClick={() => handleSort(column)}
                      style={{ cursor: "pointer" }}
                    >
                      {column}
                    </th>
                  ))}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allFilter(currentItems).map((row, index) => (
                  <tr key={index}>
                    {columns.map((column) => (
                      <td key={column}>{row[column]}</td>
                    ))}
                    <td>
                      <Actions
                        row={row}
                        onDelete={() => handleDelete(row.id)}
                        onEdit={() => handleEdit(row.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Table;
