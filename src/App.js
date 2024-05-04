import './App.css';
import GoBars from "./GoBars/GoBars";
import PureOil from "./PureOil/PureOil"
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

function App() {
  return (
    <div className="App">
        <Theme>
            <GoBars />
            <PureOil/>
        </Theme>
    </div>
  );
}

export default App;
