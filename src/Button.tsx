import React from "react";

const themes: any = {
  primary: {
    border: 0,
    outline: "none",
    padding: "10px 30px",
    background: "#4a90e2",
    borderRadius: "3px",
    cursor: "pointer",
    "&:hover": {
      background: "rgb(42, 101, 171)"
    }
  },
  outline: {
    outline: "none",
    background: "transparent",
    padding: "10px 30px",
    border: "1px solid rgb(211, 211, 211)",
    borderRadius: "3px",
    cursor: "pointer"
  },
  invisible: {
    border: 0,
    outline: "none",
    background: "transparent",
    cursor: "pointer"
  },
  disabled: {
    opacity: 0.75,
    cursor: "not-allowed"
  }
};

const Button: React.FC<{
  theme?: string;
  children: any;
  style: any;
  onClick: any;
  disabled?: boolean;
  className?: string;
  form?: string;
  type?: "button" | "submit" | "reset" | undefined;
}> = ({
  theme = "invisible",
  type = "button",
  children,
  style,
  onClick,
  disabled = false,
  className = "",
  form = ""
}) => {
  return (
    <button
      style={{
        ...themes[theme],
        ...(disabled ? themes.disabled : {}),
        ...style
      }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
      form={form}
    >
      {children}
    </button>
  );
};

export default Button;
