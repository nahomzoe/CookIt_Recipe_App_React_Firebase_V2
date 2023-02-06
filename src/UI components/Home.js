import React from "react";
import video from "./header.mp4";
import { Link } from "react-router-dom";
import Grid from "@mui/joy/Grid";

const Home = () => {
  return (
    <div className="home-container">
      <video autoPlay loop muted id="video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="try">
        <h1>CookIT</h1>
      </div>

      <div className="home">
        <Grid
          container
          spacing={2}
          columns={24}
          sx={{ flexGrow: 1, ml: 14, mt: 18, mb: 20 }}
        >
          <Grid xs={8}>
            <div className="card">
              <p>Browse recipes</p>
              <Link className="card-link" to="/allrecipes">
                See more
              </Link>
            </div>
          </Grid>

          <Grid xs={8}>
            <div className="card1">
              <p>Add recipe</p>
              <Link className="card-link" to="/addrecipe">
                See more
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
