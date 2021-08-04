import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SearchProvider, Pipeline, FilterBuilder, FieldDictionary } from '@sajari/react-search-ui';


const categoryFilter = new FilterBuilder({
  name: "category",
  field: "category"
});


const gemstoneFilter = new FilterBuilder({
  name: "gemstone",
  field: "primaryStone"
});

const materialFilter = new FilterBuilder({
  name: "material",
  field: "metal_type"
});


const sizeFilter = new FilterBuilder({
  name: "size",
  field: "size"
});

const colourFilter = new FilterBuilder({
  name: "colour",
  field: "colourVariants"
});


const priceBuckets = new FilterBuilder({
  name: "price",
  options: {
    "Under $10": "bucketPrice < 10",
    "$10 - $20": "bucketPrice >=10 AND bucketPrice < 20",
    "$20 - $50": "bucketPrice >= 20 AND bucketPrice < 50",
    "$50 - $100": "bucketPrice >= 50 AND bucketPrice < 100",
    "$100 - $200": "bucketPrice >= 100 AND bucketPrice < 200",
    "$200 - $500": "bucketPrice >= 200 AND bucketPrice < 500",
    "Above $500": "bucketPrice >= 500",
  }
});

const onairFilter = new FilterBuilder({
  name: "onAir",
  options: {
    "Recently on air": "aired = 'true'"
  }
});



const fields = new FieldDictionary({
  fields: ""
});


const pipeline = new Pipeline(
  {
    account: '1583472911415671216',
    collection: 'shoplc',
  },
  'app'
);


ReactDOM.render(
  <SearchProvider
  search={{pipeline, fields, filters: [onairFilter, categoryFilter, gemstoneFilter, materialFilter, sizeFilter, priceBuckets, colourFilter]}}
  searchOnLoad
  defaultFilter={"SKU !='3644550'"}
  >
    <App />
  </SearchProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
