import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "../components/Layouts/UserLayout";
import Landing from "../pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/* Landing Page */}
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
