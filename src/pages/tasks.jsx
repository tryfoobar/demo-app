import { Paper, Stack, Checkbox } from "@mui/material";
import TodoListItem from "../components/Dashboard/TodoListItem";
import PopUp from "../components/Tasks/PopUp";
import { useState } from "react";

const todos = [
  { title: "Create non-annoying nudges", type: "Work", checked: true, id: 1 },
  {
    title: "Finalize API integration for new feature",
    type: "Work",
    checked: true,
    id: 2,
  },
  { title: "Family Therapy at Austerlitz", type: "Family", id: 3 },
  {
    title: "Coordinate family dinner at the Summer Palace",
    type: "Family",
    id: 4,
  },
  { title: "Feed Mondale", type: "Home", id: 5 },
  { title: "iPad for kids’ rabbit", type: "Kids", id: 6 },
  { title: "PGN meeting at Tern Haven", type: "Work" },
  { title: "Give staff day off (skeleton crew)", type: "Home", id: 7 },
  {
    title: "Buy birthday  gifts for Sophie and Iverson",
    type: "Family",
    id: 8,
  },
  { title: "Choose a successor", type: "Kids", id: 9 },
  { title: "iPad for kids’ rabbit", type: "Kids", id: 10 },
  { title: "PGN meeting at Tern Haven", type: "Work", id: 11 },
  { title: "Give staff day off (skeleton crew)", type: "Home", id: 12 },
  {
    title: "Buy birthday  gifts for Sophie and Iverson",
    type: "Family",
    id: 13,
  },
  { title: "Choose a successor", type: "Kids", id: 14 },
];

const Tasks = () => {
  const [open, setOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleClick = (id) => {
    todos.forEach((todo) => {
      if (todo.id === id) {
        setSelectedTodo(todo);
      }
    });
    setOpen(true);
  };

  return (
    <section>
      {/* Todo list modal/popup  */}
      <PopUp open={open} setOpen={setOpen} todo={selectedTodo} />

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

        {todos.map((todo) => (
          <TodoListItem
            id={todo.id}
            handleClick={handleClick}
            key={todo.id}
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
