import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FORM_TYPES } from "@lib/constants";
import { SetElements } from "types/forms";
import CreateElement from "@lib/create_element";

type MenuProps = {
  index: number;
  type: string;
  setElements: SetElements;
};

export default function ChooseItemMenu({ index, type, setElements }: MenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (new_type?: string) => {
    if (new_type && new_type !== type) {
      const newElem = CreateElement(setElements)({ index, type: new_type });
      setElements((prev) => {
        const new_data = [...prev];
        new_data[index] = newElem;
        return new_data;
      });
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <Button id="basic-button" aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
        Change Type: {type}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => {
          handleClose();
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {FORM_TYPES.map((key) => (
          <MenuItem
            onClick={() => {
              handleClose(key);
            }}
          >
            {key}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
