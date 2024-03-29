import React from "react";

interface UserContext {
  username: string;
  setUsername: (value: string) => void;
}

const MyContext = React.createContext<UserContext>({
  username: "",
  setUsername: (value: string) => {},
});

export const MyContextProvider = (props) => {
  const [username, setUsername] = React.useState("John Doe");

  return (
    <MyContext.Provider value={{ username, setUsername }}>
      {props.children}
    </MyContext.Provider>
  );
};

export const MyComponentUseContext = () => {
    const myContext = React.useContext(MyContext);
    return <h3>hello {myContext.username}</h3>;
}