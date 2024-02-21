import { useState } from "react";

function App() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [accountType, setAccountType] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [formData, setFormData] = useState({});

  function handleNameChange(e) {
    setUserName(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  function handleAccountTypeChange(e) {
    setAccountType(e.target.value);
  }

  function handleSubscribeChange(e) {
    setNewsletter(e.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newFormData = {
      username: username,
      password: password,
      avatar: avatar,
      accountType: accountType,
      newsletter: newsletter,
    };

    setFormData(newFormData);

    // Clear input fields after submit event
    setUserName("");
    setPassword("");
    setAvatar("");
    setAccountType("");
    setNewsletter(false);

    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  }

  return (
    <div className="form-data">
      <form onSubmit={handleSubmit}>
        <label htmlFor="user-name">Username</label>
        <input type="text" value={username} onChange={handleNameChange} />
        <br />
        <label htmlFor="password">Password</label>
        <input type="text" value={password} onChange={handlePasswordChange} />
        <br />
        <label htmlFor="avatar-image">Avatar Image</label>
        <input type="text" value={avatar} onChange={handleAvatarChange} />
        <br />
        <label htmlFor="type">Account Type</label>
        <select
          name=""
          id="accountType"
          value={accountType}
          onChange={handleAccountTypeChange}
        >
          <option value="">Choose account type</option>
          <option value="Free">Free</option>
          <option value="Normal">Normal</option>
          <option value="Pro">Pro</option>
        </select>
        <br />
        <label htmlFor="news-letter">Subscribe to our newsletter</label>
        <input
          type="checkbox"
          id="newsletter"
          checked={newsletter}
          onChange={handleSubscribeChange}
        />
        <br />
        <input type="submit" value="Sign up" />
      </form>
      {/* <div>
        <h2>Form Data:</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div> */}
    </div>
  );
}

export default App;
