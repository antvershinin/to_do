import Counter from "./Counter";
import style from "./Header.module.css";

const Header = ({ list, filter }) => {
  return (
    <div className={style.header}>
      <h1 className="title">To DO List</h1>
      <Counter list={list} filter={filter} />
    </div>
  );
};

export default Header;
