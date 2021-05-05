import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  // Get Data From the Redux Store
  const Username = useSelector((state) => state.Logged.user.name);
  const isLogged = useSelector((state) => state.Logged.user.LoggedIn);

  // Dispatch
  const history = useHistory();

  const DashBoardHandler = () => {
    history.push("/dashboard");
  };

  // Update History
  useEffect(() => {
    if (isLogged === false || isLogged === undefined) {
      history.push("/");
    }
  }, [isLogged, history]);

  // Render Method
  return (
    <div className="HomePageSection">
      <div>
        <h1>Welcome to Home Page {Username}</h1>
        <Button
          variant="contained"
          color="secondary"
          onClick={DashBoardHandler}
        >
          Go to DashBoard
        </Button>
      </div>
    </div>
  );
};
export default HomePage;
