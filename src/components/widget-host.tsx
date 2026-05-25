import { useEffect, useState } from "react";

type WidgetHostProps = React.HTMLAttributes<HTMLDivElement>;

export function WidgetHost(props: WidgetHostProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <div {...props} />;
}