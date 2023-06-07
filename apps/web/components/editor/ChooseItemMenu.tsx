import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FORM_TYPES } from "@lib/constants";
import useElements from "@stores/useElements";

type MenuProps = {
  index: number;
  type: string;
};

export default function ChooseItemMenu({ index, type }: MenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { replaceElement, setElements } = useElements();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (new_type?: string) => {
    if (new_type && new_type !== type) {
      replaceElement(index, new_type);
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
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
