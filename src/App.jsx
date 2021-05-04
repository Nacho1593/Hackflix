// import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import Header from "./components/Header";
import Search from "./components/Search";

import Container from "./components/Container";
import About from "./components/About";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";

// import StarRatings from "react-star-ratings";

import "./App.css";

// import ReactPaginate from "react-paginate";
// import { Pagination } from "react-bootstrap";

function App() {
  // const [title, setTitle] = useState();
  // const [rating, setRating] = useState(0);
  // const [active, setActive] = useState(1);

  // const getTitle = (title) => {
  //   setTitle(title);
  // };
  // const changeRating = (newRating, name) => {
  //   setRating(newRating);
  // };
  // const handlePageClick = (page) => {
  //console.log(typeof page.target.innerText);
  // setActive(Number(page.target.innerText));
  // };
  // let active = 1;
  // let items = [];
  // for (let number = 1; number <= 20; number++) {
  //   items.push(
  //     <Pagination.Item key={number} active={number === active}>
  //       {number}
  //     </Pagination.Item>
  //   );
  // }
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Container
              // title={title}
              // rating={rating}
              // active={active}
              // setActive={setActive}
              />
            )}
          />
          <Route  path="/search" component={Search} />
          <Route  path="/about" component={About} />
          <Route  path="/contact" component={Contact} />
          <Route path="/" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
