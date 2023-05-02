import React from "react";
import { setFilter } from "../../redux/todoSlice";
import { useDispatch } from "react-redux";
import { FilterStyled } from "./Filter.styled";

type Props = {};

const Filter: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const onClickFilter: React.MouseEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement;
    if (!target.value) return;
    dispatch(setFilter({ filterName: target.value }));
  };

  return (
    <FilterStyled onClick={onClickFilter}>
      <div className="button">
        <input id="All" type="radio" value="All" name="filter" />
        <label htmlFor="All">All</label>
      </div>
      <div className="button">
        <input id="Active" type="radio" value="Active" name="filter" />
        <label htmlFor="Active">Active</label>
      </div>
      <div className="button">
        <input id="Completed" type="radio" value="Completed" name="filter" />
        <label htmlFor="Completed">Completed</label>
      </div>
    </FilterStyled>
  );
};

export default Filter;
