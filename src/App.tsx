import Calendar from "./Components/Main/Calendar";
import PaginationBtns from "./Components/Main/PaginationBtns";
import "./input.css"


function App() {
  return (
    <div className="App h-screen">
      <header className="flex justify-center items-center h-full flex-col">
        <Calendar />
        <PaginationBtns />
      </header>

    </div>
  );
}

export default App;
