export {};

import { useEffect } from "react";
// Augment the Window interface

// Add a config property with the following shape:

// env: "development" | "production"

// debugMode: boolean

declare global {
  interface Window {
    config: {
      env: "development" | "production";
      debugMode: boolean;
    };
  }
}

// Simulate usage

// Assign a value to window.config inside a script or component.

export const Component = () => {
  useEffect(() => {
    window.config = {
      env: "development",
      debugMode: true,
    };
    console.log("Environment:", window.config.env);
    console.log("Debug Mode:", window.config.debugMode);
  }, []);

  return <div>Check console for app configuration</div>;
};

// Log the config values to the console.

// Type Safety Check

// Ensure that assigning an invalid value (e.g., env: "staging") causes a TypeScript error.
