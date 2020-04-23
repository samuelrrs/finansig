import React from 'react'   
import './Main.css'
import logo from '../assets/logo.png'
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


const useStyles = makeStyles((theme) =>({
 
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      width: theme.spacing(150),
      height: theme.spacing(78),
    },
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(' 123456 ', '45,7 $', '07/03/2020', '07/03/2020'),
  createData('123456', '100,0 $', '01/01/2020', '07/03/2020'),
  createData('123456', '57,10 $', '17/04/2020', '07/03/2020'),
  createData('123456', '305,0 $', '24/03/2020', '07/03/2020'),
  createData('123456', '356,4 $', '10/02/2020', '07/03/2020'),
];

export default function Main (){
  const classes = useStyles();

	const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return( 
  

   
  <div className="container">



    <div className="navegation">
      <section>
        <img src={logo}  alt="Finansig"/>
      </section>
    </div>
      


<div className="tudo">

      <div className="header">

            <h1>Financeiro</h1>


            <h5>Voltar ao : <a href="/" className="finan">Menu principal</a></h5>

      </div>

    <div className={classes.root}>
     
      <TableContainer>
      <Paper elevation={20}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell><h2>Documento</h2></TableCell>
              <TableCell align="right"><h2>Valor</h2></TableCell>
              <TableCell align="right"><h2>Emissão</h2></TableCell>
              <TableCell align="right"><h2>Vencimento</h2></TableCell>
              <TableCell align="right"><h2>Código de barras</h2></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right"><Button class="ui secondary basic button tiny" onClick={handleClickOpen}>
                <Icon name="barcode" />
          </Button>
      
          <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Seu código de barras"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
                12345678987 4569874
            </DialogContentText>
          </DialogContent>
          <DialogActions>
        
        <Button onClick={handleClose} color="primary" autoFocus>
              Fechar
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Copiar código
            </Button>
          </DialogActions>
        </Dialog>
      
      
      </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Paper >
    </TableContainer>
    
    </div>

    <h5>Desenvolvido por SIG2000 Informática</h5>
  </div>
  </div>
 
  
 
 )


 }
