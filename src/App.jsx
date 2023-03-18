import "./App.css";
import SupabaseQuery from "./components/SupabaseQuery/SupabaseQuery";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";

function App() {
  const [allData, setAllData] = useState([]);

  return (
    <div className="App">
      <SupabaseQuery allData={allData} setAllData={setAllData} />
      <Header />
      <Homepage data={allData} />
    </div>
  );
}

export default App;
