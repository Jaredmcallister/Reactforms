import { useState } from "react";
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);
async function handleSubmit(event) {
  event.preventDefault();
  console.log("Hello 👋");
}
<form onSubmit={handleSubmit}>...</form>

//</form>const handleSubmit = async(event) = > {
//event.preventDefault();
//}
//wanna know how to write this in es6?
const SignUpForm = () => {
<>
  return <h2>Sign up</h2>
  <form>
    <label>
      Username: <input/>
      </label>
      <label>
        Password: <input/>

    </label>
    <button>Submit</button>
  </form>
  <input value={username} onChange={(event) => setUsername(event.target.value)} />
  </>
}




export default SignUpForm;