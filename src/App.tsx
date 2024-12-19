import { LoginComponent } from "./components/LoginComponent";
import Sample from "./components/Sample";
import { LoginMachineContext } from "./machines/login.machine";

export default function App() {
  return (
    <LoginMachineContext.Provider>
      <LoginComponent />
      <Sample />
    </LoginMachineContext.Provider>
  );
}
