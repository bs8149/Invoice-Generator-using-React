import { Container, Divider, Grid, Typography } from '@mui/material';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import InvoiceForm from './components/InvoiceForm';

function App() {
  return (
    <Container>
      <CssBaseline />
      <InvoiceForm />
    </Container>
  );
}

export default App;
