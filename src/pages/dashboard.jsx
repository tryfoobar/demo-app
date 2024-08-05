import { Checkbox, Chip, Grid, Paper, Stack } from "@mui/material";
import arrow from "../assets/icons/blue-right-arrow.svg";
import x from "../assets/icons/cancel.svg";

import TodoListItem from "../components/Dashboard/TodoListItem";
import Calendar from "../components/Dashboard/Calendar";
import OverView from "../components/Dashboard/OverView";
import PendingProjects from "../components/Dashboard/PendingProjects";
import { Link } from "react-router-dom";

const todos = [
  { title: "Create non-annoying nudges", type: "Work", checked: true },
  {
    title: "Finalize API integration for new feature",
    type: "Work",
    checked: true,
  },
  { title: "Family Therapy at Austerlitz", type: "Family" },
  { title: "Coordinate family dinner at the Summer Palace", type: "Family" },
  { title: "Feed Mondale", type: "Home" },
  { title: "iPad for kids’ rabbit", type: "Kids" },
  { title: "PGN meeting at Tern Haven", type: "Work" },
  { title: "Give staff day off (skeleton crew)", type: "Home" },
  { title: "Buy birthday  gifts for Sophie and Iverson", type: "Family" },
  { title: "Choose a successor", type: "Kids" },
];

const Dashboard = () => {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        {/* Stats  */}
        <div className="flex items-center justify-between">
          <div className="text-[16px] font-semibold leading-[24px] text-[#778CA2]">
            Tasks overview
          </div>

          <Link
            to="/analytics"
            className="flex cursor-pointer hover:underline items-center font-semibold gap-2 text-[#4D7CFE] text-[14px] leading-[18px] pl-[30px]"
          >
            See all stats
            <img src={arrow} alt="" />
          </Link>
        </div>

        <Paper
          sx={{
            boxShadow: "none",
            border: "1px solid #E8ECEF",
            borderRadius: "8px",
            mt: 1,
            mx: 0,
            px: 0,
          }}
        >
          <OverView />
        </Paper>

        {/* Tasks  */}
        <div className="flex items-center justify-between mt-4">
          <Stack direction="row" alignItems="center" spacing={2}>
            <div className="text-[16px] font-semibold leading-[24px] text-[#778CA2]">
              All Tasks
            </div>

            <Stack direction="row" alignItems={"center"} spacing={1}>
              <div
                style={{ padding: "3px 14px 4px 16px" }}
                className="text-[14px] text-[#778CA2] leading-[21px] font-normal flex items-center gap-2 rounded-[99px] bg-[#F2F4F6] cursor-pointer"
              >
                Complete
                <img src={x} alt="" />
              </div>

              <div
                style={{ padding: "3px 14px 4px 16px" }}
                className="text-[14px] text-[#778CA2] leading-[21px] font-normal flex items-center gap-2 rounded-[99px] bg-[#F2F4F6] cursor-pointer"
              >
                Pending
                <img src={x} alt="" />
              </div>

              <div
                style={{ padding: "3px 14px 4px 16px" }}
                className="text-[14px] text-[#778CA2] leading-[21px] font-normal flex items-center gap-2 rounded-[99px] border border-[#E8ECEF] cursor-pointer"
              >
                Expired
              </div>
            </Stack>
          </Stack>

          <Link
            to="/tasks"
            className="flex cursor-pointer hover:underline items-center  font-semibold gap-2 text-[#4D7CFE] text-[14px] leading-[18px] pl-[30px]"
          >
            See all tasks
            <img src={arrow} alt="" />
          </Link>
        </div>

        <Paper
          sx={{
            boxShadow: "none",
            border: "1px solid #E8ECEF",
            borderRadius: "8px",
            mt: 2,
            mx: 0,
            px: 0,
          }}
        >
          <div className="h-[52px] mx-2 flex items-center justify-between border-b-[1px] border-[#E8ECEF]">
            <div className="flex  items-center">
              <Checkbox
                sx={{
                  "&.Mui-checked": {
                    color: "#4D7CFE",
                  },
                }}
              />
              <div className="text-[14px] text-[#252631] leading-[21px] font-medium">
                Type to create a new task …
              </div>
            </div>
          </div>

          {todos.map((todo, idx) => (
            <TodoListItem
              key={idx}
              handleClick={() => console.log("")}
              title={todo.title}
              type={todo.type}
              checked={todo?.checked}
            />
          ))}
        </Paper>
      </Grid>

      <Grid item xs={4}>
        {/* Calendar  */}
        <div className="text-[16px] font-semibold leading-[24px] text-[#778CA2] mb-2">
          Calendar
        </div>
        <Paper
          sx={{
            boxShadow: "none",
            border: "1px solid #E8ECEF",
            p: 0,
            m: 0,
            borderRadius: "8px",
          }}
        >
          <Calendar />
        </Paper>

        {/* Projects  */}
        <PendingProjects />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
