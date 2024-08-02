import { Paper, Stack, Checkbox } from "@mui/material";
import TodoListItem from "../components/Dashboard/TodoListItem";

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
  { title: "iPad for kids’ rabbit", type: "Kids" },
  { title: "PGN meeting at Tern Haven", type: "Work" },
  { title: "Give staff day off (skeleton crew)", type: "Home" },
  { title: "Buy birthday  gifts for Sophie and Iverson", type: "Family" },
  { title: "Choose a successor", type: "Kids" },
];

const Tasks = () => {
  return (
    <section>
      <div className="text-[16px] font-semibold leading-[24px] text-[#778CA2] -mt-2">
        All Tasks
      </div>

      <Paper
        sx={{
          boxShadow: "none",
          border: "1px solid #E8ECEF",
          borderRadius: "8px",
          mt: 2,
          mx: 0,
          px: 2,
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
            title={todo.title}
            type={todo.type}
            checked={todo?.checked}
          />
        ))}
      </Paper>
    </section>
  );
};

export default Tasks;
