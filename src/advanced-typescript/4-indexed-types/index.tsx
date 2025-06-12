// Define the Theme type with nested keys and literal value types
type Theme = {
  light: {
    color: {
      primary: "white";
      secondary: "black";
    };
  };
  dark: {
    color: {
      primary: "black";
      secondary: "white";
    };
  };
};

// Extract the type of the dark theme's primary color using indexed access
type DarkPrimaryColor = Theme["dark"]["color"]["primary"]; // "black"

// Define component props with strict type enforcement
type ButtonProps = {
  color: DarkPrimaryColor; // must be "black"
};

// Functional component using the extracted type
function ThemedButton({ color }: ButtonProps) {
  return <button style={{ backgroundColor: color }}>Dark Mode Button</button>;
}

export function IndexedTypeDemo() {
  return <ThemedButton color="black" />;
}
