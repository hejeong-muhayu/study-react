import './App.css'
import Gallery from "./ui표현하기/Gallery.jsx";
import TodoList from "./ui표현하기/TodoList.jsx";
import Profile from "./ui표현하기/Profile.jsx";
import PackingList from "./ui표현하기/PackingList.jsx";
import List from "./ui표현하기/List.jsx";
import TeaGathering from './ui표현하기/TeaGathering.jsx';
import FancyText from "./ui표현하기/FancyText.jsx";
import InspirationGenerator from "./ui표현하기/InspirationGenerator.jsx";
import Copyright from "./ui표현하기/Copyright.jsx";

function App() {

  return (
    <>
        <Gallery/>
        <TodoList/>
        <Profile/>
        <PackingList/>
        <List/>
        <TeaGathering/>
        <FancyText title text="Get Inspired App" />
        <InspirationGenerator>
            <Copyright year={2004} />
        </InspirationGenerator>
    </>
  )
}

export default App
