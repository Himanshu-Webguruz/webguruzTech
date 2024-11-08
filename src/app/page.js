
import Home2 from './home2/page'
import SearchPage from './search/page'
const page = ({searchParams}) => {
    if (searchParams.s) {
        // Render SearchPage if `s` query parameter is present
       
        return <SearchPage searchTerms={searchParams.s} />;
      }
    
      // Render HomePage by default
      return <Home2 />;
}

export default page
export const metadata = {
  title: "Leading Digital Marketing and Web Development Company",
  description:"WebGuruz Technologies offers top-notch Digital Marketing and Web Development services with a dedicated team of 100+ professionals for our valued clients.",

};
