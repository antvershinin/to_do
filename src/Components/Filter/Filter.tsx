import React from "react";
import { useDispatch } from "react-redux";
import { FilterStyled } from "./Filter.styled";
import { setFilter } from "../../redux/todoSlice";

type Props = {};

const Filter: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const onClickFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filter = e.target.value;
    dispatch(setFilter({ filterName: filter }));
  };

  return (
    <FilterStyled>
      <div className="button">
        <input
          id="All"
          type="radio"
          value="All"
          name="filter"
          onChange={onClickFilter}
        />
        <label htmlFor="All">All</label>
      </div>
      <div className="button">
        <input
          id="Active"
          type="radio"
          value="Active"
          name="filter"
          onChange={onClickFilter}
        />
        <label htmlFor="Active">Active</label>
      </div>
      <div className="button">
        <input
          id="Completed"
          type="radio"
          value="Completed"
          name="filter"
          onChange={onClickFilter}
        />
        <label htmlFor="Completed">Completed</label>
      </div>
    </FilterStyled>
  );
};

export default Filter;
