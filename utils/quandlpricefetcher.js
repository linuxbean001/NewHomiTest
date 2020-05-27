import ENV from '../environment';

// Code reference
// https://s3.amazonaws.com/quandl-production-static/zillow/indicators.csv

// Documentation
// https://www.quandl.com/data/ZILLOW-Zillow-Real-Estate-Research/documentation

const apartment1 = 'MLPCC'; // Median Listing Price - Condo/Co-op
const apartment2 = 'MLPDT'; // Median Listing Price - Duplex/Triplex

const smallHome1 = 'MLP1B'; // Median Listing Price Per Square Foot - One Bedroom
const smallHome2 = 'MLP2B'; // Median Listing Price Per Square Foot - Two Bedrooms

const largeHome1 = 'MLP3B'; // Median Listing Price Per Square Foot - Three Bedrooms
const largeHome2 = 'MLP4B'; // Median Listing Price Per Square Foot - Four Bedrooms
const largeHome3 = 'MLP5B'; // Median Listing Price - Five Or More Bedrooms

const mobileHome = 'MLPSF'; // Median Listing Price Per Square Foot - Single-Family Residence

const APIKEY = ENV().quandlApiKey;

const formatDates = () => {
  const today = new Date().toISOString().split('T')[0];
  const startDate = `${Number(new Date().toString().split(' ')[3])-2}-12-31`;
  return [startDate, today];
};

const QuandlURLGenerator =  (homeType, zipCode, bedrooms) => {
  switch (homeType) {
    case 'apartment':
      if (bedrooms <= 1) return `https://www.quandl.com/api/v3/datasets/ZILLOW/Z${zipCode}_${apartment1}?start_date=${formatDates()[0]}&end_date=${formatDates()[1]}&api_key=${APIKEY}`;
      else return `https://www.quandl.com/api/v3/datasets/ZILLOW/Z${zipCode}_${apartment2}?start_date=${formatDates()[0]}&end_date=${formatDates()[1]}&api_key=${APIKEY}`;
    case 'largeHome':
      if (bedrooms <= 3) return `https://www.quandl.com/api/v3/datasets/ZILLOW/Z${zipCode}_${largeHome1}?start_date=${formatDates()[0]}&end_date=${formatDates()[1]}&api_key=${APIKEY}`;
      else if (bedrooms == 4) return `https://www.quandl.com/api/v3/datasets/ZILLOW/Z${zipCode}_${largeHome2}?start_date=${formatDates()[0]}&end_date=${formatDates()[1]}&api_key=${APIKEY}`;
      else return `https://www.quandl.com/api/v3/datasets/ZILLOW/Z${zipCode}_${largeHome3}?start_date=${formatDates()[0]}&end_date=${formatDates()[1]}&api_key=${APIKEY}`;
    case 'mobileHome':
      return([`https://www.quandl.com/api/v3/datasets/ZILLOW/Z${zipCode}_${mobileHome}?start_date=${formatDates()[0]}&end_date=${formatDates()[1]}&api_key=${APIKEY}`]);
    case 'smallHome':
      if (bedrooms <= 1) return `https://www.quandl.com/api/v3/datasets/ZILLOW/Z${zipCode}_${smallHome1}?start_date=${formatDates()[0]}&end_date=${formatDates()[1]}&api_key=${APIKEY}`;
      else return `https://www.quandl.com/api/v3/datasets/ZILLOW/Z${zipCode}_${smallHome2}?start_date=${formatDates()[0]}&end_date=${formatDates()[1]}&api_key=${APIKEY}`;
  }
};

export default QuandlURLGenerator;