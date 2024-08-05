import { Grid } from "@mui/material";

import Progress from "../components/Analytics/Progress";
import graph from "../assets/analytics/people-data.webp";
import graph2 from "../assets/analytics/task-graph.webp";
import stats from "../assets/analytics/statistics.webp";

const Analytics = () => {
  return (
    <section>
      <div className="-mt-2 mb-2">
        <img src={stats} alt="" />
      </div>

      <div className="bg-[#E8ECEF] h-[1px] mb-8 mt-8 w-screen -ml-[2vw]"></div>

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
