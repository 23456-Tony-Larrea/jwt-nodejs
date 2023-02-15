import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography, TextField, Button } from '@material-ui/core';
import axios from '../axios/axios'
import Swal from 'sweetalert2'; 
import { useNavigate } from 'react-router-dom';



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
  const navigate = useNavigate();
  const classes = useStyles();
  const [activeTab, setActiveTab] = React.useState('login');
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')
  const [usernameRegister,setUsernameRegister]=useState('')
  const [passwordRegister,setPasswordRegister]=useState('')

  const submitLogin=()=>{
    console.log(username)
    console.log(password)
    axios.post('/login',{
      username:username,
      password:password
    })
    .then(res=>{
      console.log(res)
      Swal.fire({
        icon: 'success',
        title: 'Inicio de Sesión Exitoso',
        text: 'Bienvenido',
        showConfirmButton: false,
        timer: 1500
      })
      navigate("/users");
    })
    .catch(err=>{
      console.log(err)
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario o Contraseña Incorrecta',
        showConfirmButton: false,
        timer: 1500
      })
  }
    )
  }

  const submitRegister=()=>{
    console.log(username)
    console.log(password)
    console.log(email)
    axios.post('/register',{
      username:username,
      password:password,
      email:email
    })
    .then(res=>{
      console.log(res)
      Swal.fire({
        icon: 'success',
        title: 'Registro Exitoso',
        text: 'Bienvenido',
        showConfirmButton: false,
        timer: 1500
      })
      navigate("/users");
    }
    )
    .catch(err=>{
      console.log(err)
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario o Contraseña Incorrecta',
        showConfirmButton: false,
        timer: 1500
      })
  }
    )
  }

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
           onClick={(e) => {
              handleTabChange('login');
              
            }}
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
            <form className={classes.form} >
              {activeTab === 'login' && (
<TextField
               variant="outlined"
               margin="normal"
               required
               fullWidth
               id="username"
               label="Nombre Usuario"
               name="username"
               autoComplete="username"
               autoFocus
               onChange={e => setUsername(e.target.value)}
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
               onChange={e => setPassword(e.target.value)}
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
                  value={usernameRegister}
               />
<TextField
                 variant="outlined"
                 margin="normal"
                 required
                 fullWidth
                 id="username"
                 label="email del usuario"
                 name="email"
                 autoComplete="username"
                value={email}
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
                  value={passwordRegister}
               />
</>
)}
<Button
             
             fullWidth
             variant="contained"
             color="primary"
             className={classes.submit}
             onClick={submitLogin}
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