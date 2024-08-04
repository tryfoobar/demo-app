import { FormControl, MenuItem, Select, TextField } from "@mui/material";

const PopUpForm = () => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
        <div>
          <div className="text-[12px] font-normal leading-[18px] text-[#252631] my-2">
            Full name
          </div>
          <TextField
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#E8ECEF", // default border color
                },
              },
            }}
            value={"J. Aimes Evans"}
            fullWidth
            variant="outlined"
          />
        </div>

        <div>
          <div className="text-[12px] font-normal leading-[18px] text-[#252631] my-2">
            Role
          </div>
          <FormControl
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#", // default border color
                },
              },
            }}
            fullWidth
          >
            <Select defaultValue={"Manager"}>
              <MenuItem value="Manager">Manager</MenuItem>
              <MenuItem value="Engineer">Engineer</MenuItem>
              <MenuItem value="Growth">Growth</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div>
          <div className="text-[12px] font-normal leading-[18px] text-[#252631] my-2">
            Email
          </div>
          <TextField
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#E8ECEF", // default border color
                },
              },
            }}
            value={"j.aimes.evans@gmail.com"}
            fullWidth
            variant="outlined"
          />
        </div>

        <div>
          <div className="text-[12px] font-normal leading-[18px] text-[#252631] my-2">
            Phone
          </div>
          <TextField
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#E8ECEF", // default border color
                },
              },
            }}
            value={"(555) 132-9855"}
            fullWidth
            variant="outlined"
          />
        </div>

        <div>
          <div className="text-[12px] font-normal leading-[18px] text-[#252631] my-2">
            Language
          </div>
          <FormControl
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#", // default border color
                },
              },
            }}
            fullWidth
          >
            <Select defaultValue={"English"}>
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="French">French</MenuItem>
              <MenuItem value="Arabic">Arabic</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default PopUpForm;
