import Counter from "./Counter";

const Header = ({ list, filter }) => {
  return (
    <div className="header">
      <h1 className="title">To DO List</h1>
      <Counter list={list} filter={filter} />
    </div>
  );
};

export default Header;
