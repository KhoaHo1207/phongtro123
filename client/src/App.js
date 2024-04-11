import { Routes, Route } from "react-router-dom";
import { publicRoute, privateRoute } from "./routes";

function App() {
  return (
    <div className="h-screen w-screen bg-primary">
      <Routes>
        {publicRoute &&
          publicRoute.length > 0 &&
          publicRoute.map((route, index) => {
            const Page = route.component;
            return <Route path={route.path} element={<Page />}></Route>;
          })}
      </Routes>
    </div>
  );
}

export default App;
