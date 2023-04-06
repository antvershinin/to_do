export default function Filter({}) {
  function onClick(e) {
    // if (e.target.value === "Completed") console.log("object");
  }

  return (
    <div onClick={onClick} className="app__filter">
      <input type="button" value="All" />
      <input type="button" value="Active" />
      <input type="button" value="Completed" />
    </div>
  );
}
