const Counter = ({ list, filter }) => {
  let count = list.length;
  if (count === 0) return "You have no duties";
  return `${count} ${count > 1 ? "duties" : "duty"} ${
    filter === "Completed"
      ? "completed"
      : filter === "Active"
      ? "left"
      : `overall`
  }`;
};

export default Counter;
