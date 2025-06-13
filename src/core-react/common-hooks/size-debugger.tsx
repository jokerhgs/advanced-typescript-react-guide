import React, { useEffect, useLayoutEffect, useState } from "react";

type SizeDebuggerProps = {
  targetRef: React.RefObject<HTMLDivElement | null>;
};

export const SizeDebugger: React.FC<SizeDebuggerProps> = ({ targetRef }) => {
  const [area, setArea] = useState<number>(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (targetRef.current) {
      setReady(true);
    }
  }, [targetRef.current]);

  useLayoutEffect(() => {
    if (!ready || !targetRef.current) return;

    const node = targetRef.current;
    const width = node.offsetWidth;
    const height = node.offsetHeight;
    setArea(width * height);
  }, [ready, targetRef]);

  return <div>Area: {area}px²</div>;
};
