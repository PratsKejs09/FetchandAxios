import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [values, setValues] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => {
  //       if (res.ok) {
  //         console.log("Successful");
  //       } else {
  //         console.log("Not okay");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       // console.log(data);
  //       setValues(data);
  //       console.log("Values", values);
  //     })
  //     .catch((error) => {
  //       console.log("There was an error", error);
  //     });
  // }, []);

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response);
      setValues(response.data);
    });
  }, []);

  return (
    <div className="App">
      {values &&
        values.map((item) => {
          return (
            <div>
              <h1 key={item.id + item.name}> {item.username} </h1>
            </div>
          );
        })}
    </div>
  );
}
