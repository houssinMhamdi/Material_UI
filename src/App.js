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
  Typography,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import MenuIcon from "@mui/icons-material/Menu";
import "./App.css";
import Tourcard from "./Components/Tourcard";
import cities from "./data.json";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Container sx={{ marginTop: "35px" }}>
        {cities.map((city) => {
          return (
            <>
              <Typography
                variant="h2"
                component="h2"
                sx={{ marginBottom: "60px" }}
              >
                {city.name}
              </Typography>
              <Grid container spacing={5}>
                {city.tours.map((tour) => {
                  return <Tourcard tour={tour} key={tour.id} />;
                })}
              </Grid>
              ;
            </>
          );
        })}
      </Container>
    </div>
  );
}

export default App;
