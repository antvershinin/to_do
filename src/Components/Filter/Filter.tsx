import React from "react";
import { setFilter } from "../../redux/todoSlice";
import { useDispatch } from "react-redux";

const Filter:React.FC = () => {
  const dispatch = useDispatch();
  const onClickFilter:React.MouseEventHandler<HTMLElement> = (e) => {
    
    const value = e.target.value
    if (!value) return;
    dispatch(setFilter({ filterName: value }));
  }
  return (
    <div onClick={onClickFilter}>
      <div>
        <input id="All" type="radio" value="All" name="filter" />
        <label htmlFor="All">All</label>
      </div>
      <div>
        <input id="Active" type="radio" value="Active" name="filter" />
        <label htmlFor="Active">Active</label>
      </div>
      <div>
        <input id="Completed" type="radio" value="Completed" name="filter" />
        <label htmlFor="Completed">Completed</label>
      </div>
    </div>
  );
};

export default Filter;
