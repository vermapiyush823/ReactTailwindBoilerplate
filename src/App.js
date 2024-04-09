import { Route, Routes } from "react-router-dom";
import Domain from "./screens/Domain";
import Profile from "./screens/Profile";
import SignUpForm from "./screens/SignUpForm";
import Verification from "./screens/Verification";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUpForm />} />
      <Route path="/profile-setup" element={<Profile />} />
      <Route path="/domain" element={<Domain />} />
      <Route path="/verification" element={<Verification />} />
    </Routes>
  );
}

export default App;
