import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserError,
  fetchDelete,
  fetchUpdatetor,
  fetchAddUsers,
} from "../Store/Actions";
import axios from "axios";
import UserLists from "./UserLists";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const DashBoard = () => {
  // This state I've used for Client Edit Purpose
  const [EditedValue, setEditedValue] = useState([
    {
      name: "",
      email: "",
      id: "",
    },
  ]);

  // Get Users Details From Redux Store
  const Users = useSelector((state) => state.UserApiCalling.users);

  // Get User details from API
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const fetchUsers = () => {
    return (dispatch) => {
      dispatch(fetchUserRequest());
      axios
        .get("http://jsonplaceholder.typicode.com/users")
        .then((res) => {
          // console.log(res.data);
          dispatch(fetchUserSuccess(res.data));
        })
        .catch((err) => {
          dispatch(fetchUserError(err));
          // console.log(err);
        });
    };
  };

  // User Edit Function and Action
  const EditSubmitHandle = async (ide) => {
    setEditedValue({
      ...EditedValue,
      id: ide,
    });
  };
  useEffect(() => {
    dispatch(fetchUpdatetor(EditedValue));
    console.log(EditedValue.id);
  }, [EditedValue.id]);

  // User Deleter Fucntion and Call action
  const UserDeleter = (id) => {
    dispatch(fetchDelete(id));
  };

  // User Add Request send to Backend Dev
  const UserAddhandler = (e) => {
    e.preventDefault();
    axios
      .post("http://jsonplaceholder.typicode.com/users", EditedValue)
      .then((res) => {
        console.log(res.data);
        dispatch(fetchAddUsers(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Modal design
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <div
          className="UserInfoTop"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h1>Users: </h1>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            {/* <Link to="/fetchproccess"> */}
            Add users
            {/* </Link> */}
          </Button>
        </div>
        <div className="DashBoardUserFlex">
          {Users.map((user) => {
            return (
              <UserLists
                key={user.id}
                user={user}
                EditSubmitHandle={() => EditSubmitHandle(user.id)}
                setEditedValue={setEditedValue}
                EditedValue={EditedValue}
                UserDeleter={UserDeleter}
              />
            );
          })}
        </div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2>New User</h2>
              <p>react-transition-group animates me.</p>
              <form className="EditFormSection">
                <div className="EditInputgroup">
                  <input
                    placeholder="Enter User Name"
                    type="text"
                    onChange={(e) =>
                      setEditedValue({ ...EditedValue, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="EditInputgroup">
                  <input
                    type="text"
                    placeholder="Enter Email"
                    onChange={(e) =>
                      setEditedValue({ ...EditedValue, email: e.target.value })
                    }
                    required
                  />
                </div>
                <Button
                  variant="contained"
                  type="submit"
                  onClick={UserAddhandler}
                >
                  Submit
                </Button>
              </form>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};
export default DashBoard;
