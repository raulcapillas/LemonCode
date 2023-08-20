import React from "react";

export const MyComponentPromiseUnmount = () => {
  const [visible, setVisible] = React.useState<boolean>(false);

  return (
    <>
      {visible && <MyChildComponent />}
      <button onClick={() => setVisible(!visible)}>
        Toggle Child component visible
      </button>
    </>
  );
};

const useSafeState = function <T>(
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const mountedRef = React.useRef<boolean>(false);
  const [state, setState] = React.useState<T>(initialValue);

  React.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const isMounted = () => mountedRef.current;

  const setSafeState = function (
    data: T
  ): React.Dispatch<React.SetStateAction<T>> | void {
    return isMounted() ? setState(data) : null;
  };

  return [state, setSafeState];
};

export const MyChildComponent = () => {
  const [filter, setFilter] = React.useState<string>("");
  const [userCollection, setUserCollection] = useSafeState([]);

  const setSafeUserCollection = (userCollection) => {
    setUserCollection(userCollection);
  };

  React.useEffect(() => {
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
        .then((r) => r.json())
        .then((json) => setSafeUserCollection(json));
    }, 2500);
  }, [filter]);

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {userCollection.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
