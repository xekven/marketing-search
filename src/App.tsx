import React from 'react';

import MainView from 'views/Main';


const App: React.FC = () => {

  return (
    <>
      <header className="App-header">
        <h1>Advertising data challenge 📈</h1>
        <ul>
          <li>Select zero to n datasources</li>
          <li>Select zero to n campaigns</li>
        </ul>
        <span className="info">(Where zero means "All")</span>
      </header>
      <main>
        {/* YOUR ROUTING MAY BE HERE :P */}
        <MainView />
      </main>
      <footer>
        <span>
          Copyright &copy; {(new Date).getFullYear()} 🚀
        </span>
      </footer>
    </>
  );
}

export default App;
