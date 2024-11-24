import { useRef, useState } from "react";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const passwordRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefaulte();
  };
  return (
    <>
      <h1>Sign In FORM</h1>
      <form onSubmit={handleFormSubmit}>
        {/* Email */}
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" name="email" />

        {/* Password */}
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
        <button type="submit"> Submit </button>
      </form>
    </>
  );
};

export default SignInPage;
