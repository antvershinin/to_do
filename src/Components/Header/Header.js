import style from "./Header.module.css";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/todoSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={style.header}>
        <h1 className="title">To DO List</h1>
      </div>
      <Form onSubmit={(text) => dispatch(addTask({ text }))} />
    </>
  );
};

export default Header;
