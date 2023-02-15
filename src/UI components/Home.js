import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import video from "./header.mp4";

import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Grid from "@mui/joy/Grid";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "transparent", pt: 10, pb: 53 }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{ color: "white" }}
            margin={"auto"}
            paddingBottom={10}
            fontFamily="Montserrat Alternates"
          >
            cookIT
          </Typography>
          <div className="home">
            <Grid
              // container
              // spacing={2}
              // columns={24}
              // sx={{ flexGrow: 1, ml: 14, mt: 18, mb: 20 }}

              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 2, sm: 17, md: 16 }}
              margin={"auto"}
            >
              <Grid xs={8} sx={{ margin: "auto", paddingBottom: 4 }}>
                <div className="card">
                  <p style={{ marginBottom: "-6px" }}>Browse recipes</p>
                  <Link className="card-link" to="/allrecipes" style={{}}>
                    See more
                  </Link>
                </div>
              </Grid>

              <Grid xs={8}>
                <div className="card1">
                  <p style={{ marginBottom: "-6px" }}>Add recipe </p>
                  <Link
                    className="card-link"
                    to="/addrecipe"
                    // href="https://www.linkedin.com/newsletters/6931824078844538880/"
                  >
                    Click here
                  </Link>
                </div>
              </Grid>
            </Grid>
          </div>
          <video autoPlay loop muted id="video">
            <source src={video} type="video/mp4" />
          </video>
        </Box>
      </Container>
    </React.Fragment>
  );
}

// import React from "react";
// import video from "./header.mp4";
// import { Link } from "react-router-dom";
// import Grid from "@mui/joy/Grid";

// const Home = () => {
//   return (
//     <div className="home-container" style={{ height: "63vh" }}>
//       <video autoPlay loop muted id="video">
//         <source src={video} type="video/mp4" />
//       </video>
//       <div className="try">
//         <h1>CookIT</h1>
//       </div>

//       <div className="home">
//         <Grid
//           container
//           spacing={2}
//           columns={24}
//           sx={{ flexGrow: 1, ml: 14, mt: 18, mb: 20 }}
//         >
//           <Grid xs={8}>
//             <div className="card">
//               <p>Browse recipes</p>
//               <Link className="card-link" to="/allrecipes">
//                 See more
//               </Link>
//             </div>
//           </Grid>

//           <Grid xs={8}>
//             <div className="card1">
//               <p>Add recipe</p>
//               <Link className="card-link" to="/addrecipe">
//                 See more
//               </Link>
//             </div>
//           </Grid>
//         </Grid>
//       </div>
//     </div>
//   );
// };

// export default Home;
