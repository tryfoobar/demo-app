import { Grid } from "@mui/material";
import React from "react";
import Progress from "../components/Analytics/Progress";
import graph from "../assets/analytics/people-data.webp";
import graph2 from "../assets/analytics/task-graph.webp";

const Analytics = () => {
  return (
    <section>
      <div></div>

      <Grid container spacing={2.5}>
        <Grid item xs={6}>
          <Progress title="Progress by Person" graph={graph} />
        </Grid>

        <Grid item xs={6}>
          <Progress title="Task Completion Trends" graph={graph2} analytics />
        </Grid>
      </Grid>
    </section>
  );
};

export default Analytics;
