import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

const FetchProccess = () => {
  //   const dispatch = useDispatch;

  //   Post requster ask to backend Developer
  useEffect(() => {
    const NewData = {
      name: "Manimaran",
      Email: "itsnotme@gmail.com",
    };
    axios
      .post("http://jsonplaceholder.typicode.com/users", NewData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   same as and also update new value
  const FetchPatchHandler = () => {
    const patchData = {
      hey: "Maran",
    };
    axios
      .patch("http://jsonplaceholder.typicode.com/users/1", patchData)
      .then((res) => {
        console.log(res.data);
      });
  };

  //   Delete APi
  const FetchDeletehHandler = () => {
    const patchData = {
      hey: "Maran",
    };
    axios
      .delete("http://jsonplaceholder.typicode.com/users/1", patchData)
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <Button variant="contained" onClick={FetchPatchHandler}>
        Patch
      </Button>
      <Button variant="contained" onClick={FetchDeletehHandler}>
        delete
      </Button>
    </div>
  );
};
export default FetchProccess;
