import Modal from 'react-modal'

import { Calendar } from "./components/Calendar"
import { GlobalStyle } from "./styles/global"

Modal.setAppElement('#root')

const App: React.FC = () => {
  return (
    <div className="App">
      <Calendar  />
      <GlobalStyle />
    </div>
  );
}

export default App;
