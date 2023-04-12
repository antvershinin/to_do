import Counter from "./Counter";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <h1 className="title">To DO List</h1>
      <Counter />
    </div>
  );
};

export default Header;
