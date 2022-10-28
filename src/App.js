import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/NavBar";
import ProfileCard from "./components/ProfileCard";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Pagination from "./components/Pagination";
import { ErrorBoundary } from "./components/ErrorBoundary";

function App() {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [detailsPerPage] = useState(10);
  const [status, setStatus] = useState(0)

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true)
      const res = await axios.get('https://randomuser.me/api/', {
        params: {
          results: 60,
        }
      })
      setDetails(res.data.results)
      setStatus(res.status)
      setLoading(false)
    }
    
    fetchUser();
  }, [])
  console.log(status)

  //Get index of last user
  const indexOfLastUser = currentPage * detailsPerPage;
  const indexOfFirstUser = indexOfLastUser - detailsPerPage;
  const currentUser = details.slice(indexOfFirstUser, indexOfLastUser);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
    <ProfileCard userDetails={currentUser} loading={loading} />
    <Pagination postPerpage={detailsPerPage} totalPost={details.length} paginate={paginate} />
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/navbar" element={<Navbar />} />
    </Routes>
    </>

  )
}

export default App;

