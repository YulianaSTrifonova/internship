import { calculatorKeys } from "../constants/calculatorKeys";
import Key from "./Key";

export default function Keys({
    clickHandler,
}: {
    clickHandler: (pressedKey: string) => void;
}) {
    return (
        <table>
            <tbody>
                {calculatorKeys.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((button, colIndex) => (
                            <Key
                                key={`${button.displayName}-${colIndex}`}
                                button={button}
                                clickHandler={clickHandler}
                            />
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
