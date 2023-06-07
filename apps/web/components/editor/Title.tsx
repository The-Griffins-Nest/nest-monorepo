import { DARKBACKGROUND } from "@lib/color_styles";
import { Button, Modal, Box, Typography } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import useElements from "@stores/useElements";
import fonts from "@styles/fonts.module.css";
import { ChangeEvent, useState } from "react";

function Title({ index }: { index: number }) {
  const setFormData = useElements((state) => state.setFormData);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="bg-[#00000000] dark:hover:bg-[#00000024] hover:bg-[#00000008] rounded-lg group">
      <TextareaAutosize
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          setFormData(index, { type: "Title", text: event.target.value });
        }}
        aria-label="title"
        minRows={1}
        placeholder="Title"
        className={`${fonts.cheltenham} w-full outline-none border-none text-4xl resize-none
        bg-[#00000000] dark:text-white text-[#101935] font-[500] tracking-[-1px] m-2`}
      />
      <Button onClick={handleOpen}>
        <p
          className={`text-black dark:text-white ${fonts.publico} opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out`}
        >
          Open modal
        </p>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[400px] bg-white dark:bg-[${DARKBACKGROUND}] border-2 border-black rounded-xl shadow-lg p-4`}
        >
          <p className={`text-black dark:text-white ${fonts.publico}`}>
            Categories
          </p>
        </Box>
      </Modal>
    </div>
  );
}

export default Title;
