import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/Directory.component";

const HomePage = (props) => {
  console.log(props);

  return (
    <section className="homepage">
      <Directory />
    </section>
  );
};

export default HomePage;
