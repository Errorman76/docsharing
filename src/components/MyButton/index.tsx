import styles from "./styles.module.css";
import clsx from "clsx";

interface ComponentProps extends React.ComponentProps<"button"> {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label: string;
}

export function MyButton({});
