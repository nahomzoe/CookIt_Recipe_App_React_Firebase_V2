import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  return (
    <Box
      sx={{
        flexGrow: 1,

        backgroundColor: "transparent",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}
          sx={{ fontSize: "12px" }}
        >
          <Grid xs={10} md={5} lg={2}>
            <Item sx={{ color: "#c5c7ca" }}> nahom130g@gmail.com</Item>
          </Grid>
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item sx={{ color: "#c5c7ca" }}>© Copyright</Item>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <Item sx={{}}>
                <LinkedInIcon sx={{ color: "lightblue", fontSize: 30 }} />
              </Item>
            </Grid>
            <Grid>
              <Item>
                <GitHubIcon sx={{ color: "#c5c7ca", fontSize: 30 }} />
              </Item>
            </Grid>
            <Grid>
              <Item>
                <AccountCircleIcon sx={{ color: "#c5c7ca", fontSize: 30 }} />{" "}
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
