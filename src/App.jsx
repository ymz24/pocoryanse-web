import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <body>
        <div className="absolute bg-black w-full h-full bg-opacity-40 animate-text-focus-in" />
        <div className="bg-[url('./images/top.JPG')] bg-center bg-cover h-screen flex items-center justify-center">
          <div className="animate-text-focus-in text-white text-5xl">
            Pocoryanse!
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;