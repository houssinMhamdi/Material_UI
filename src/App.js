import {
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import MenuIcon from "@mui/icons-material/Menu";
import "./App.css";
import Tourcard from "./Components/Tourcard";

function App() {
  return (
    <div className="app">
      <Container>
        <Grid container spacing={5}>
          <Tourcard />
          <Tourcard />
          <Tourcard />
          <Tourcard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
