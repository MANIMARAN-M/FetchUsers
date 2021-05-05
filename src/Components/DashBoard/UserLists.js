import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";

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

export default function UserLists({
  user,
  EditSubmitHandle,
  setEditedValue,
  EditedValue,
  UserDeleter,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // const UsersData = useSelector((state) => state.UserApiCalling.users);
  // console.log("heh", UsersData);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="UsersData">
      <div className="UserBg">
        <div className="userProfile">
          <AccountCircleIcon />
        </div>
        <p>User Name: {user.name}</p>
        <p>User Id: {user.id}</p>
        <p>User Email: {user.email}</p>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Edit
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "10px" }}
          onClick={() => UserDeleter(user.id)}
        >
          delete
        </Button>

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
              <h2>{user.name}</h2>
              <p>react-transition-group animates me.</p>
              <form className="EditFormSection">
                <div className="EditInputgroup">
                  <input
                    placeholder={user.name}
                    type="text"
                    onChange={(e) =>
                      setEditedValue({ ...EditedValue, name: e.target.value })
                    }
                  />
                </div>
                <div className="EditInputgroup">
                  <input
                    type="text"
                    placeholder={user.email}
                    onChange={(e) =>
                      setEditedValue({ ...EditedValue, email: e.target.value })
                    }
                  />
                </div>
                <Button
                  variant="contained"
                  onClick={() => EditSubmitHandle(user.id)}
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
}
