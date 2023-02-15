import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import axios from '../axios/axios';
import Swal from 'sweetalert2';
const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    marginBottom: '16px',
  },
  disabledButton: {
    opacity: 0.5,
  },
});

const UploadDocuments = () => {
  const classes = useStyles();
  const [amount, setAmount] = useState(0);
  const [transactionNumber, setTransactionNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [accountNumber, setAccountNumber] = useState('2206001633'); // Aquí se agrega el número de cuenta quemado
  const [isValid, setIsValid] = useState(false);
  const [file, setFile] = useState(null);
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleTransactionNumberChange = (event) => {
    const input = event.target.value;
    if (/^\d{0,10}$/.test(input)) {
      setTransactionNumber(input);
    }
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name_user', userName);
    formData.append('quantity', amount);
    formData.append('numTransaction', transactionNumber);
    formData.append('image', file);
    formData.append('id_ticket',3);
    axios.post('/ticketsSold', formData)
      .then((response) => {
        Swal.fire({
          title: '¡Guardado!',
          text: 'El documento ha sido guardado exitosamente',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un error al intentar guardar el documento',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Validate the input fields on every change
  React.useEffect(() => {
    if (userName && amount > 0 && transactionNumber && accountNumber.length === 10) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [userName, amount, transactionNumber, accountNumber]);

  return (
    <div className={classes.container}>
      <h1>Información del Solicitante</h1>
      <p>
        <strong>Nombre del Usuario:</strong>
      </p>
      <TextField
        className={classes.input}
        variant="outlined"
        value={userName}
        onChange={handleUserNameChange}
        placeholder="Nombre del Usuario"
      />
      <p>
        <strong>Cantidad:</strong>
      </p>
      <TextField
        className={classes.input}
        variant="outlined"
        type="number"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Cantidad"
        InputProps={{
          inputProps: {
            max: 1000,
            min: 0,
          },
        }}
      />
      <p>
        <strong>Número de Transacción:</strong>
      </p>
      <TextField
        className={classes.input}
        variant="outlined"
        type="text"
        value={transactionNumber}
        onChange={handleTransactionNumberChange}
        placeholder="Número de Transacción"
      />
      <p>
        <strong>Número de Cuenta a Depositar:</strong>
      </p>
      <TextField
        className={classes.input}
        variant="outlined"
        type="text"
        value={accountNumber}
        onChange={() => {}} // Esta función no hace nada, lo que desactiva el input
        placeholder="Número de Cuenta a Depositar"
        disabled // Esto desactiva el input correspondiente
      />
      <p>
<strong>Archivo Adjunto:</strong>
</p>
<input
     type="file"
     onChange={handleFileChange}
   />
<Button
variant="contained"
color="primary"
className={`${classes.input} ${!isValid && classes.disabledButton}`}
onClick={handleSubmit}
disabled={!isValid}
>
Guardar
</Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        className={!isValid ? classes.disabledButton : ''}
        disabled={!isValid}
      >
        Subir Información
      </Button>
    </div>
        );
        };
        
        export default UploadDocuments;