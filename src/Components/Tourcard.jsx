import React from "react";
import { Grid, Paper, Typography, Box, Rating } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
export default function Tourcard() {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          alt="img"
          className="img"
        />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            Immerse into the falls
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
          <Typography variant="subtitle2" component="p" marginLeft={0.5}>
            5 hours
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
            value={4.5}
            readOnly
            precision={0.5}
            size="small"
          />

          <Typography variant="subtitle2" component="p" marginLeft={0.5}>
            4.5
          </Typography>

          <Typography variant="subtitle2" component="p" marginLeft={0.5}>
            (424 reviews)
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="h3" marginLeft={0.5}>
            From C $450
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
}
