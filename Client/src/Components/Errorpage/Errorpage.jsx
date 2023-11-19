import React, { useEffect, useState } from "react";
import "./Errorpage.css";
const Errorpage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Assume the operation takes some time
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="">
        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading...</p>
          </div>
        ) : (
          <div className="animated-not-found">
            <div className="animated-404">Sorry !!!</div>
            <p>
              We apologize for the inconvenience, but our site is currently
              undergoing maintenance. Please check back later
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Errorpage;
