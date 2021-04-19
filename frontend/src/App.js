import Navigation from "./components/Navigation";
import NotesList from "./components/NotesList";
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <div>
      <Navigation />
      Hello world
      <NotesList />
      <CreateNote />
      <CreateUser />
    </div>
  );
}

export default App;
