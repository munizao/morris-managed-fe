import React from 'react';
import CompetencyContainer from './CompetencyView/CompetencyContainer';
import Header from './Header';


export default function App() {
  return (
    <>
      <Header/>
      <main>
        <CompetencyContainer />
      </main>
    </>
  );
}
