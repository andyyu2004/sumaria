import React from 'react';

type PropType = {
  
};

const Login: React.FC<PropType> = () => {
  // const [firstname, setFirstname] = useState("");
  // const [surname, setSurname] = useState("");
  // const [username, setUsername] = useState("")
  // const dispatch = useDispatch();

  // const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (!username) return;
  //   const user = await apilogin(username, firstname, surname);
  //   setUserAsync(dispatch)(user);
  // };

  return (
    <div>
      {/* <form onSubmit={handleLogin}>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter username"/>
        <input type="text" value={firstname} onChange={e => setFirstname(e.target.value)} placeholder="Enter first name"/>
        <input type="text" value={surname} onChange={e => setSurname(e.target.value)} placeholder="Enter surname" />
        <input type="submit" />
      </form> */}
    </div>
  );
};

export default Login;
