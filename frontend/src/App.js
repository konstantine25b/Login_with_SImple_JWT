import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import {
  Route,
  BrowserRouter as Router,
} from "react-router-dom/cjs/react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <PrivateRoute path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
