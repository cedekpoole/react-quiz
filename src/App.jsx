import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#23272f] text-gray-100 pt-8">
        <Header />
        <main className="container mx-auto p-10">
          <p className="text-3xl">Question 1/15</p>
        </main>
      </div>
    </>
  );
}

export default App;
