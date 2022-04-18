import "./App.css";
import CreateTask from "./components/createTask";
import ViewAll from "./components/viewAll";
import React, { useState } from "react";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Nav } from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

function App() {
  const [wasSuccessful, setWasSuccessful] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  return (
    <main>
      <Nav/>
      <section className="view">

        <ToastContainer
          position="top-left"
          autoClose={2000}
          newestOnTop
          closeOnClick
          pauseOnHover
          pauseOnFocusLoss
        />
        <CreateTask
          wasSuccessful={() => setWasSuccessful(!wasSuccessful)}
          editingTask={editingTask}
        />
        <ViewAll
          refresh={wasSuccessful}
          editing={(val) => setEditingTask(val)}
        />
      </section>
      <Footer />
    </main>
  );
}

export default App;
