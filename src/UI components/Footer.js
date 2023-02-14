import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#444648",
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
        // bgcolor: "#000",
        backgroundColor: "transparent",

        // border: "solid #c5c7ca 0.01px",
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

// import React from "react";

// const Footer = () => {
//   return (
//     <footer style={{ marginBottom: "0" }}>
//       <div className="content">
//         <div className="left box">
//           <div className="upper">
//             <div className="topic">
//               <h5>Contact us</h5>{" "}
//             </div>
//             <div className="phone">
//               <a href="#">
//                 <i className="fas fa-phone-volume"></i>+358 0000 0040
//               </a>
//             </div>
//             <div className="email">
//               <a href="#">
//                 <i className="fas fa-envelope"></i>nahom130g@gmail.com
//               </a>
//             </div>
//           </div>
//           <div className="lower"></div>
//           <div className="middle box"></div>
//         </div>
//         <div className="middle box">
//           <div className="media-icons">
//             <a href="https://www.facebook.com/bchelsinki">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="https://business.instagram.com/">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="https://business.twitter.com/en/basics/intro-twitter-for-business.html">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="https://www.youtube.com/user/hbusinesscollege">
//               <i className="fab fa-youtube"></i>
//             </a>
//             <a href="https://www.linkedin.com/in/nahom-asfaw-6b78a6185/">
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//           </div>
//         </div>
//         <div className="right box">
//           <div className="topic">
//             {" "}
//             <h5>Subscribe us</h5>
//           </div>
//           <form action="#">
//             <input type="text" placeholder="Enter email address" />
//             <input type="submit" name="email" value="Send" />
//           </form>
//         </div>
//       </div>
//       <div className="bottom">
//         <p>
//           Copyright © 2022 <a href="https://github.com/nahomzoe">nahom</a> All
//           rights reserved
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
