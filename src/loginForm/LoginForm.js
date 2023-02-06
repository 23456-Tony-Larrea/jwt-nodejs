import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
  },
  card: {
    maxWidth: 400,
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  tab: {
    margin: theme.spacing(2, 0),
    color: theme.palette.secondary.main,
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    cursor: 'pointer',
  },
  activeTab: {
    borderBottom: `2px solid ${theme.palette.secondary.dark}`,
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = React.useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={8} md={4}>
        <Card className={classes.card}>
          <Typography variant="h5" component="h2">
            {activeTab === 'login' ? 'Inicio de Sesión' : 'Registro'}
          </Typography>
          <Typography
            variant="subtitle2"
            component="h3"
            className={`${classes.tab} ${activeTab === 'login' ? classes.activeTab : ''}`}
            onClick={() => handleTabChange('login')}
          >
            Inicio de Sesión
          </Typography>
          <Typography
            variant="subtitle2"
            component="h3"
            className={`${classes.tab} ${activeTab === 'register' ? classes.activeTab : ''}`}
            onClick={() => handleTabChange('register')}
          >
            Registro
          </Typography>
          <CardContent>
            <form className={classes.form}>
              {activeTab === 'login' && (
<TextField
               variant="outlined"
               margin="normal"
               required
               fullWidth
               id="email"
               label="Correo Electrónico"
               name="email"
               autoComplete="email"
               autoFocus
             />
)}
{activeTab === 'login' && (
<TextField
               variant="outlined"
               margin="normal"
               required
               fullWidth
               name="password"
               label="Contraseña"
               type="password"
               id="password"
               autoComplete="current-password"
             />
)}
{activeTab === 'register' && (
<>
<TextField
                 variant="outlined"
                 margin="normal"
                 required
                 fullWidth
                 id="name"
                 label="Nombre"
                 name="name"
                 autoFocus
               />
<TextField
                 variant="outlined"
                 margin="normal"
                 required
                 fullWidth
                 id="email"
                 label="Correo Electrónico"
                 name="email"
                 autoComplete="email"
               />
<TextField
                 variant="outlined"
                 margin="normal"
                 required
                 fullWidth
                 name="password"
                 label="Contraseña"
                 type="password"
                 id="password"
                 autoComplete="new-password"
               />
</>
)}
<Button
             type="submit"
             fullWidth
             variant="contained"
             color="primary"
             className={classes.submit}
           >
{activeTab === 'login' ? 'Iniciar Sesión' : 'Registrarse'}
</Button>
</form>
</CardContent>
</Card>
</Grid>
</Grid>
);
};

export default LoginPage;