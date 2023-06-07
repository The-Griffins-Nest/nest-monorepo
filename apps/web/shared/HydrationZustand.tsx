import { useEffect, useState } from "react";

function HydrationZustand({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return <>{isHydrated ? <div>{children}</div> : null}</>;
}

export default HydrationZustand;
