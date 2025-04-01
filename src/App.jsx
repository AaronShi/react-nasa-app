import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleSlideModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_URL = import.meta.env.VITE_NASA_API_KEY;
      const url = "https://api.nasa.gov/planetary/apod?api_key=" + NASA_URL;

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        setData(apiData);
        console.log("DATA\n", apiData);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchAPIData();
  }, []);

  return (
    <>
      {!data ? (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      ) : (
        <>
          <Main data={data} />
          {showModal && (
            <SideBar data={data} handleSlideModal={handleSlideModal} />
          )}
          <Footer data={data} handleSlideModal={handleSlideModal} />
        </>
      )}
    </>
  );
}

export default App;
