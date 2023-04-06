export default function Filter({ onClick }) {
  return (
    <div className="app__filter">
      <input type="button" value="All" />
      <input type="button" value="Active" />
      <input type="button" value="Completed" />
    </div>
  );
}
