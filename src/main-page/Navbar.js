import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MainPage from './mainPage'
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    color: "#cfd8dc",

  },
  buttons: {
    textAlign: "right",
    color: "#cfd8dc"
  },
  appBar: {
    backgroundColor: " bg-teal-500",
  },
}));

const  Navbar=()=> {
  const classes = useStyles();
  const navigate = useNavigate();


  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={`${classes.title} text-lg`}>
            Sistema de Tickets
          </Typography>
          <div className={classes.buttons}>
            <Button color="inherit" onClick={handleLoginClick}>Inicia Sesion</Button>
          </div>
        </Toolbar>
      </AppBar>
      <MainPage />
    </div>
  );
}
export default Navbar;