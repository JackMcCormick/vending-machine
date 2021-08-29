import "../styles/App.css";
import { MachinePanel } from "./machinePanel/machinePanel";
import { VendingContextProvider } from "./vending-context";

function App() {
  return (
    <section className="App">
      <VendingContextProvider>
        <MachinePanel />
      </VendingContextProvider>
    </section>
  );
}

export default App;
