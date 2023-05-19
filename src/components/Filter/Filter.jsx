import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter } from "../../redux/filterSlice";
import { statusFilters } from "./StatusFilter";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import { FilterBox, FilterButton } from "./Filter.styled";
import { selectStatusFilter } from "../../redux/selectors";

export const Filter = () => {
  const dispatch = useDispatch();
  const filterStatus = useSelector(selectStatusFilter);

  const handleOnClick = (event) => {
    dispatch(setStatusFilter(event.target.innerText));
  };

  return (
    <FilterBox>
      <FilterButton
        id="dropdown-item-button"
        title={filterStatus ? filterStatus : "Filter"}
      >
        <Dropdown.ItemText>------Show------</Dropdown.ItemText>
        <Dropdown.Item onClick={(event) => handleOnClick(event)} as="button">
          {statusFilters.all}
        </Dropdown.Item>
        <Dropdown.Item onClick={(event) => handleOnClick(event)} as="button">
          {statusFilters.follow}
        </Dropdown.Item>
        <Dropdown.Item onClick={(event) => handleOnClick(event)} as="button">
          {statusFilters.followings}
        </Dropdown.Item>
      </FilterButton>
    </FilterBox>
  );
};
