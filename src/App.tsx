import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./components/home/home";
import Projects from "./components/projects/projects";
import Stack from "./components/stack.tsx/stack";
import Contact from "./components/contact/contact";

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="https://projet-entreprise.vercel.app/" element={<Home />} />
          <Route path="https://projet-entreprise.vercel.app/projects" element={<Projects />} />
          <Route path="https://projet-entreprise.vercel.app/stack" element={<Stack />} />
          <Route path="https://projet-entreprise.vercel.app/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App
