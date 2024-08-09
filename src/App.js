

import  Header  from "./components/Header/index";
import Layout from "./components/Layout";
import AppRouter from "./routes";
import CreateStyle from "./styles/global"
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Layout>
        <AppRouter/>
        </Layout>
      <CreateStyle/>
    </BrowserRouter>
  );
}

export default App;
