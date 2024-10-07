import "./App.css";
import Menu from "./Menu";
import TopHeader from "./TopHeader";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Menu />
      <body>
        <div className="bg-white h-1/2">
          <h1 className="text-4xl">Wellcome to Pocoryanse-web!!</h1>
          {/* <p>桒野歩夢、能美泰成、三谷一晴、柳井一真、山崎翔矢の5人からなるグループのいろいろをまとめたサイトです。</p>  */}
        </div>
      </body>
    </div>
  );
}

export default App;