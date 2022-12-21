import { useState } from "react";

export const MyCustomCountingHook = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = (): void => {
    setCount((prevState) => prevState + 1);
  };

  return { count, incrementCount };
};
