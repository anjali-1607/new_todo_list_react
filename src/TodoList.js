import React, { useState } from "react";
import "./App.css";

function TodoList() {
  const [activity, setactivity] = useState("");

  const [listData, setlistData] = useState([]);
  function addActivity() {
    // setlistData([...listData, activity]);
    // console.log(listData);

    setlistData((listdata) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setactivity("");
      return updatedList;
    });
  }

  function removeactivity(i) {
    const updatedList = listData.filter((ele, id) => {
      return i != id;
    });
    setlistData(updatedList);
  }

  return (
    <>
      <div className="container">
        <div className="header"> TODOLIST </div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setactivity(e.target.value)}></input>

        <button onClick={addActivity}>Add</button>
        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listData"> {data}</div>
                  <div className="btn-position">
                    <button onClick={() => removeactivity(i)}>remove(-)</button>{" "}
                  </div>
                </p>
              </>
            );
          })}
      </div>
    </>
  );
}

export default TodoList;
