import React, { useEffect, useState } from "react";
import axios from "axios";
import About from "./About";
import Navbar from "./NavBar";
import ProfileCard from "./ProfileCard";
import ErrorPage from './ErrorPage'
import { Link } from "react-router-dom";

const Home = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get("https://randomuser.me/api/", {
        params: {
          results: 20,
        },
      });
      setDetails(data.results);
    };

    fetchUser();
  }, []);
  return (
    <div>
      {/* <Navbar>
        <Link to="/about"><About /></Link>
        <Link to="error"><ErrorPage /></Link>
      </Navbar>
      <ProfileCard userDetails={details} /> */}
      HOm3
    </div>
  );
};

export default Home;
