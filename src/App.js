import { Route, Routes } from "react-router-dom";
import Profile from "./screens/Profile";
import SignUpForm from "./screens/SignUpForm";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUpForm />} />
      <Route path="/profile-setup" element={<Profile />} />
    </Routes>
  );
}

export default App;
