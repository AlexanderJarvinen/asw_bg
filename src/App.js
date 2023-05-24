import './App.css';
import { AnchorProvider, AnchorLink } from "react-anchor-navigation"
import { CustomSection } from "./containers/CustomSection.tsx";
import { Header } from "./containers/Header.tsx";

const App = () => {

    // const list = Array.from({ length: 4 }, (v, i) => ({
    //     id : `part-${i + 1}`,
    //     title: `Part ${i + 1}`
    // }));

    const list = [
        {
            id : `part-1`,
            title: `Главная`
        },
        {
            id : `part-2`,
            title: `О нас`
        },
        {
            id : `part-3`,
            title: `Фото`
        },
        {
            id : `part-4`,
            title: `Портфолио`
        },
        {
            id : `part-5`,
            title: `Оборудование`
        },
        {
            id : `part-6`,
            title: `Услуги`
        }
    ];

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
