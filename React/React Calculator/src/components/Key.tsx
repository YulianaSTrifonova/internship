export default function Key({ button, clickHandler }: { button: any, clickHandler: (pressedKey: string) => void }) {

  return (
    <td
      colSpan={button.colspan}
      rowSpan={button.rowspan}
      className={button.className} 
      onClick={() => {
        clickHandler(button.displayName)
      }}
    >
      {button.displayName}
    </td>
  );
}
