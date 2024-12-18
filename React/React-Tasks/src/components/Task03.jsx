const Task03 = () => {
  return (
    <div className="container center">
      <h2 className="heading"> Task 3 </h2>
      <button
        onContextMenu={() => alert("Ha! You thought you could outsmart React?")}
      >
        {" "}
        Right Click me{" "}
      </button>
    </div>
  );
};

export default Task03;
