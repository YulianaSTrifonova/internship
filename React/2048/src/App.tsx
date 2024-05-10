import { HashRouter } from "react-router-dom";
import Game from "./components/Game/Game";

export function App() {
  return (
    <HashRouter>
      <Game />
    </HashRouter>
  );
}
