import * as React from "react";
import './App.css';
import CustomResults  from './components/CustomResults';
import CustomFilters from './components/CustomFilters';
import CustomHeader from './components/CustomHeader';
import CustomResultsHeader from './components/CustomResultsHeader';

function App() {
  return (
    <div>
      <CustomHeader />
      <CustomResultsHeader/>
      <div className="w-11/12 mx-auto grid grid-cols-4 py-10 relative results">
          <CustomFilters />
          <CustomResults />
      </div>
    </div>
  );
}

export default App;
