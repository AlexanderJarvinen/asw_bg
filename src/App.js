import './App.css';
import { AnchorProvider, AnchorLink } from "react-anchor-navigation"
import { CustomSection } from "./containers/CustomSection.tsx";
import { Header } from "./containers/Header.tsx";
import { IntlProvider } from 'react-intl';
import { LOCALES } from './helpers/i18n/locales.ts';
import { messages } from './helpers/i18n/naming.ts'
import { FormattedMessage } from 'react-intl';
import {useState} from "react";


const App = () => {
    const [locale, setLocale] = useState("rs-RS")

    const handleSetLocale = (locale: string) => {
        setLocale(locale);
    }

    const list = [
        {
            id : `part-1`,
            title: <FormattedMessage id='home'/>
        },
        {
            id : `part-2`,
            title: <FormattedMessage id='about_us'/>
        },
        {
            id : `part-3`,
            title: <FormattedMessage id='foto'/>
        },
        {
            id : `part-4`,
            title: <FormattedMessage id='portfolio'/>
        },
        {
            id : `part-5`,
            title: <FormattedMessage id='equipment'/>
        },
        {
            id : `part-6`,
            title: <FormattedMessage id='services'/>
        }
    ];


    return (
    <div className="App">
        <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={LOCALES.SERBIAN}>
          <AnchorProvider offset={58}>
            <Header list={list} setLocale={handleSetLocale}/>
            <main>
              { list.map((item) => (
                  <CustomSection id={item.id} key={item.id}>
                    <h2>{item.title}</h2>
                    <p>⬇️</p>
                  </CustomSection>
              ))}
            </main>
          </AnchorProvider>
        </IntlProvider>
    </div>
  );
}

export default App;
