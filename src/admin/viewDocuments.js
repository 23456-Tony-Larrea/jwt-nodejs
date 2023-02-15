import React, { useEffect, useState } from 'react';
import axios from '../axios/axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
} from '@material-ui/core';
import Swal from 'sweetalert2'

export const ViewDocuments = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get('/ticketsSold');
        setDocuments(response.data.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDocuments();
  }, []);

  const handleStatusChange = async (id, newState) => {
    try {
      await axios.put(`/ticketsSold/${id}`, { state_ticket: newState });
      setDocuments((prevDocs) => {
        return prevDocs.map((doc) => {
          if (doc.id === id) {
            return { ...doc, state_ticket: newState };
          } else {
            return doc;
          }
        }
        );
      });
      Swal.fire({
        icon: 'success',
        title: 'Estado cambiado con éxito',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Ver Documentos de los usuarios</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Usuario</TableCell>
              <TableCell>Imagen</TableCell>
              <TableCell>Numero de transaccion</TableCell>
              <TableCell>Cantidad de boletos</TableCell>
              <TableCell>Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(documents) &&
              documents.map((document) => (
                <TableRow key={document.id}>
                  <TableCell>{document.name_user}</TableCell>
                  <TableCell>
                    <img
                      src={`http://localhost:4000/pdf-to-images/${document.image}`}
                      alt="document"
                    />
                  </TableCell>
                  <TableCell>{document.numTransaction}</TableCell>
                  <TableCell>{document.quantity}</TableCell>
                  <TableCell>
                    <Select
                      value={document.state_ticket}
                      onChange={(e) =>
                        handleStatusChange(document.id, e.target.value)
                      }
                    >
                      <MenuItem value={true}>Activo</MenuItem>
                      <MenuItem value={false}>Inactivo</MenuItem>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ViewDocuments;