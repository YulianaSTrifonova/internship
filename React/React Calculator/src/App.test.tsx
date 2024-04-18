import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Renders calculator with keys", () => {
  it("Renders properly", () => {
    render(<App />);

    const keysPlusMinusElement = screen.getByText("±");
    const keysAdditionElement = screen.getByText("*");
    const keysSqrtElement = screen.getByText("√");

    expect(keysPlusMinusElement).toBeInTheDocument();
    expect(keysAdditionElement).toBeInTheDocument();
    expect(keysSqrtElement).toBeInTheDocument();
  });
});
