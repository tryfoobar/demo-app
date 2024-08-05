import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import React from "react";
import cancel from "../assets/icons/modal-cancel.svg";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(0),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(0),
  },
  "& .MuiDialog-container": {
    background: "rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(2.7182817459106445px)",
  },
}));

export default function Modal({ open, setOpen, popUpTitle, children, width }) {
  const tab = React.Children.toArray(children).find(
    (child) => child.props.slot === "tab"
  );
  const content = React.Children.toArray(children).find(
    (child) => child.props.slot === "content"
  );
  const actions = React.Children.toArray(children).find(
    (child) => child.props.slot === "actions"
  );
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "8px",
            maxWidth: 750,
            width: width ? width : 750,
            boxShadow: "0px 5px 25px 0px rgba(91, 91, 91, 0.10)",
          },
        }}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            height: "57px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #E8ECEF",
          }}
          id="customized-dialog-title"
        >
          <div className="text-[14px] text-[#778CA2] leading-[21px] font-medium">
            {popUpTitle}
          </div>

          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <img src={cancel} alt="" />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <div className="h-[46px] bg-[#F8FAFB] px-6 flex items-center ">
            {tab}
          </div>

          <div className="px-6 mt-5">{content}</div>
        </DialogContent>

        <DialogActions sx={{ mt: 3, p: 0 }}>{actions}</DialogActions>
      </BootstrapDialog>
    </>
  );
}
