import { IoAddOutline } from "react-icons/io5";
import Button from "@mui/material/Button";

interface SeparatorProps {
  index: number;
}

function Separator({ index }: SeparatorProps) {
  return (
    <Button
      variant="text"
      className="h-4 w-full"
      onClick={() => {
        console.log(index);
      }}
    >
      <IoAddOutline />
    </Button>
  );
}

function ElementSeparator({ elems }: { elems: React.ReactNode[] }) {
  const result = [];
  for (let i = 0; i < elems.length; i++) {
    result.push(elems[i]);
    if (i !== elems.length - 1) {
      result.push(
        <div key={i}>
          <Separator index={i} />
        </div>
      );
    }
  }
  return <>{result}</>;
}

export default ElementSeparator;
