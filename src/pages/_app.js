import "../styles/globals.css";

//INTERNAL IMPORT
import { ChadAppProvider } from "../Context/ChadAppContext";
import { NavBar } from "./index";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <ChadAppProvider>
      <NavBar />
      <Component {...pageProps} />
    </ChadAppProvider>
  </div>
);

export default MyApp;
