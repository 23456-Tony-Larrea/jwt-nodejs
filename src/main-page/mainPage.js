import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardsContents from "./CardsContents";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  messageContainer: {
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
  description: {
    fontSize: 20,
    color: theme.palette.grey[600],
    marginBottom: theme.spacing(2),
  },
  cardsContainer: {
    textAlign: "center",
  },
}));

export default function WelcomeMessage() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.messageContainer}>
        <Typography variant="h1" className={classes.title}>
          Bienvenido
        </Typography>
        <Typography variant="h2" className={classes.description}>
          Sistema de tickets
        </Typography>
        <Typography variant="body1" className={classes.description}>
          Gana increíbles premios
        </Typography>
      </Grid>
        <CardsContents />
    </Grid>
    );
}