import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./utils/routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <Router>
        <Switch>
          {routes.map((route: any, index: number) => (
            <Route {...route} key={index} />
          ))}
        </Switch>
      </Router>
    </>
  );
};

export default App;
