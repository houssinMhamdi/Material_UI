import React from "react";
import { Grid, Paper, Typography, Box, Rating } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { createTheme, ThemeProvider } from "@mui/material";
export default function Tourcard({ tour }) {
  const { name, duration, rating, numberOfReviews, price, image } = tour;
  const theme = createTheme({
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: "subtitle2",
            },
            style: {
              fontSize: 13,
            },
            props: {
              variant: "subtitle3",
            },
            style: {
              fontSize: 12,
            },
          },
        ],
      },
    },
  });
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img src={image} alt={name} className="img" />
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              {name}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccessTimeIcon
              sx={{
                width: "13px",
                marginLeft: "8px",
              }}
            />
            <Typography variant="subtitle3" component="p" marginLeft={0.5}>
              {duration} hours
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            marginTop={4}
          >
            <Rating
              name="read-only"
              value={rating}
              readOnly
              precision={0.5}
              size="small"
            />

            <Typography variant="subtitle2" component="p" marginLeft={0.5}>
              {rating}
            </Typography>

            <Typography variant="subtitle2" component="p" marginLeft={0.5}>
              ({numberOfReviews} reviews)
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="h3" marginLeft={0.5}>
              From C ${price}
            </Typography>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
}
