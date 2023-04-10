const Toolbar = ({ completeAll, clearAll }) => {
  return (
    <div className="toolbar">
      <input
        onClick={completeAll}
        type="button"
        className="manage__button manage__button--complete"
        value="Complete All"
      ></input>
      <input
        onClick={clearAll}
        type="button"
        className="manage__button manage__button--clear"
        value="Clear All"
      ></input>
    </div>
  );
};

export default Toolbar;
