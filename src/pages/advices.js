import { useEffect, useState} from "react";
import api from "../api/api";
import styles from "../styles/advices.module.css"
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from '@mui/material/TextField';



const ConsejosPage = () => {

  const [advice, setAdvice] = useState(null);

  useEffect(  () => {
    const getAdvice = async() => {

      try {
        const response = await api.get("/advice");
        console.log("response1", response);
        setAdvice(response.data)
      } catch (e) {
        console.log("e", e);
      }
    };
    getAdvice();
  }, []);

  
 

  if(!advice){
    return <h1>cargando datos</h1>
  }
   
  return <div>
  <div className={styles.page}>
      
      <div className={styles.container}>

        <h1 className={styles.titulo}>Consejo del dia</h1>
        <h2>{advice.slip.advice}</h2>
        <Button variant="contained"> Marcar como favorito </Button>
        <Button variant="contained" > <SearchIcon /> siguiente consejo </Button>
      </div>
      <div className={styles.container}>

        <h1 className={styles.titulo}>Consejos favoritos</h1>
        <TableContainer component={Paper} className={styles.scrollv}>
        <Table stickyHeader  >
          <TableHead >
            <TableRow>
              <TableCell align="center">Advices</TableCell>
              <TableCell align="center">Delete</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody styles={"max"}>
            
              
              <TableRow >
                
                <TableCell align="left"><h3>{advice.slip.advice}</h3></TableCell>
                <TableCell align="center"><Button variant="contained"> Quitar de la lista </Button>
        </TableCell>
                
              
                
              </TableRow>
            
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      
    
  </div>

<div className={styles.container2}>
<h1 className={styles.titulo}>Buscador de Consejos</h1>
<div className={styles.page}>
  <h3>*Palabra clave:</h3>
  
<TextField id="outlined-basic" label="Palabra clave" variant="outlined" />

</div>

<h2>Resultados de la busqueda</h2>

<TableContainer component={Paper} className={styles.scrollv}>
        <Table stickyHeader  >
          <TableHead >
            <TableRow>
              <TableCell align="center"><h2>Texto</h2></TableCell>
              <TableCell align="center"></TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody styles={"max"}>
            
              
              <TableRow >
                
                <TableCell align="left"><h3>{advice.slip.advice}</h3></TableCell>
                <TableCell align="center"><Button variant="contained"> Marcar como favorito </Button>
        </TableCell>
                
              
                
              </TableRow>
            
          </TableBody>
        </Table>
      </TableContainer>

  </div>
  </div>
};


export default ConsejosPage;




