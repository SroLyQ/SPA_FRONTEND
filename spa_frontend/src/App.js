import logo from "./logo.svg";
import "./App.css";
import Person from "./component/Person";
import Header from "./component/Header";
import { useState } from "react";
import { useEffect } from "react";
import { getUser } from "./api/getuser";
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUserHandler = async () => {
      const usersRes = await getUser();
      console.log(usersRes.data);
      setUsers(usersRes.data);
    };
    getUserHandler();
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="flex flex-col bg-blue-500 h-[40%] mt-8">
        <h2 className="text-xl font-bold">Our Members</h2>
        <div className="flex flex-col mt-5 items-center">
          {users.map((user) => {
            return (
              <Person
                namePrefix={user.namePrefix}
                firstName={user.name}
                lastName={user.lastname}
                studentID={user.studentID}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
