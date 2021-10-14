import "./App.css";
import { useEffect, useState } from "react";
import { Input } from "./components/Input";
import { Cards } from "./components/Cards";
import {axios} from "axios";

function App() {
  const [repository, setRepository] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repository.full_name}`)
      .then((response) => response.json())
      .then((response) => setRepository(response))
      .catch((err) => console.log(err));
  }, [repository.full_name]);

  console.log(repository.owner);
  console.log(typeof repository)

  return (
    <div className="App">
      <div className="App-header">
        <Input setRepository={setRepository} repository={repository} />
        <div>
          <Cards
            description={repository.description}
            login={repository?.owner?.login}
            avatar_url={repository?.owner?.avatar_url}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
