import { Provider } from 'react-redux'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './app/components/Navbar'
import Homepage from "./app/pages/Homepage"
import Posts from './app/pages/Posts'
import { Store } from './shared'
function App() {
  

  return (
    <Provider store={Store}>
      <div>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/users" element={<Homepage />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App
