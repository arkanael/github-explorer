import { RepositoryList } from "./components/RepositoryList";
import "./styles/global.scss";

//modelo de um component - Função que começa com a primeira letra Maiúscula
//e a função devolve um html.
export function App() {
  return (
    <>
      <RepositoryList />
    </>
  );
}
