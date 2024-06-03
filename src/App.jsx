import "./tailwind.css";
import CVViewer from "./CVViewer";

function App() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div className="h-full rounded-lg p-4"></div>
      <div className="h-full rounded-lg lg:col-span-2 p-4">
        <CVViewer />
      </div>
    </div>
  );
}

export default App;
