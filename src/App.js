import './App.css';
import { AnchorProvider, AnchorLink } from "react-anchor-navigation"
import { CustomSection } from "./containers/CustomSection.tsx";
import { Header } from "./containers/Header.tsx";

const App = () => {

    const list = Array.from({ length: 4 }, (v, i) => ({
        id : `part-${i + 1}`,
        title: `Part ${i + 1}`
    }));

  return (
    <div className="App">
      <AnchorProvider offset={58}>
        <Header list={list} />
        <main>
          { list.map((item) => (
              <CustomSection id={item.id} key={item.id}>
                <h2>{item.title}</h2>
                <p>⬇️</p>
              </CustomSection>
          ))}
        </main>
      </AnchorProvider>
    </div>
  );
}

export default App;
