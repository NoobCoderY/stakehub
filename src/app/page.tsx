import QuotesPage from '@/components/client/QuotesPage'
import { Quote } from '@/utils/types';


interface responseType {
  quotes: Quote[] | null, 
  authors: [] |null
}

const Home = async () => {

  const {quotes,authors}:responseType = await getData();
 
  return (
    <>
      <QuotesPage quotes={quotes} authorsData={authors} />
    </>
  )
}




/**************************fetech data from server side********************************** */

 const getData = async () => {
  let quotes: Quote[] | null = null;
  let authors: [] | null = null
  try {
    const response = await fetch("https://wordsapi-nkj3.onrender.com/quotes");
    const data = await response.json();
    quotes = data.quotes
    authors = data.authors
  } catch (error) {
    console.error("Error fetching quotes:", error);
  }

  return {
    quotes, authors
  }

};

export default Home;