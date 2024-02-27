import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import AuthProvider from "./contexts/AuthContext";
import PageRoutes from "./routes/PageRoutes";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppHeader />
        <PageRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
