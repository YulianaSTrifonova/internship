import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Calculator from "./components/Calculator";

describe("Renders calculator with keys", () => {
    it("Renders ± button properly", () => {
        render(<Calculator />);
        const keysPlusMinusElement = screen.getByText("±");
        expect(keysPlusMinusElement).toBeInTheDocument();
    });

    it("Renders number 7 button properly", () => {
        render(<Calculator />);
        const numSevenElement = screen.getByText("7");
        expect(numSevenElement).toBeInTheDocument();
    });

    it("Renders √ button properly", () => {
        render(<Calculator />);
        const keysSqrtElement = screen.getByText("√");
        expect(keysSqrtElement).toBeInTheDocument();
    });
});
