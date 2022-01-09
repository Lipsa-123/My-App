import Lipsa from "./components/user";
function App() {
  return (
    <div>
      <h1>
        Users
      </h1>
      <Lipsa name="Lipsa" description="FSWD"/>
      {/* <Lipsa name="SHyam" description="FSWD"/>
      <Lipsa name="Laxmi" description="FSWD"/> */}
    </div>
  );
}

export default App;

//props -> a data that is passed from one component to another

//state -> a set of data that a individual component hold