import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faPen, faPhone } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '120vh'
  },
  card: {
    width: "300px",
    height: "300px",
    backgroundColor: "#cfd8dc",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "20px",
    margin: "20px"
  },
  cardHeader: {
    width: "100%"
  },
  cardTitle: {
    color: "#3f51b5"
  },
  cardBody: {
    width: "100%",
    textAlign: "center"
  },
  icon: {
    fontSize: '80px',
    color: '#00B0FF',
    marginBottom: '20px'
  },
  title: {
    fontSize: '24px',
    color: '#00B0FF',
    textAlign: 'center',
    marginBottom: '20px'
  },
  subtitle: {
    fontSize: '18px',
    color: '#757575',
    textAlign: 'center',
    marginBottom: '20px'
  },
  content: {
    textAlign: 'center',
    fontSize: '20px'
  }
});
const MyCard = (props) => {
const classes = useStyles();

return (
<Card className={classes.card}>
<CardContent>
<FontAwesomeIcon className={classes.icon} icon={props.icon} />
<h3 className={classes.title}>{props.title}</h3>
{props.children}
</CardContent>
</Card>
);
};

const MyCards = () => {
return (
<>
<MyCard icon={faPen} title="Regístrate con nosotros">
<p>Regístrate y forma parte de nuestro equipo</p>
</MyCard>
<MyCard icon={faMedal} title="Observa los premios">
<p>Descubre los premios que tenemos para ti</p>
</MyCard>
<MyCard icon={faPhone} size="120x" title="Consulta con nosotros">
<p>Contáctanos por WhatsApp</p>
<a href="https://wa.me/">WhatsApp Link</a>
</MyCard>
</>
);
};

export default MyCards;