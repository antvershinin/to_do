import { useSelector } from "react-redux";
import { listByFilter } from "../../redux/selectors";

const Counter = () => {
  const list = useSelector(listByFilter);
  const listLength = list.length;

  return (
    <>
      <div>{listLength} </div>
    </>
  );
};

export default Counter;
