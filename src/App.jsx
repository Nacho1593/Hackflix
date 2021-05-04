// import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          <Route exact path="/search" component={Search} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/" component={PageNotFound} />

          {/* <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignOut />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} /> */}
        </Switch>
      </Router>
      {/* <Search title={title} />
      {/* <div className="text-center my-3">
        Filtrar por rating:
        <StarRatings
          rating={rating}
          starRatedColor="orange"
          starHoverColor="orange"
          changeRating={changeRating}
          numberOfStars={5}
          name="rating"
          starDimension="2rem"
          starSpacing="0.1rem"
        />
      </div> */}
      {/* funciona */}
      {/* <Container
        className="mb-2"
        title={title}
        rating={rating}
        active={active}
        setActive={setActive}
      /> */}
      {/* <div className="d-flex justify-content-center"> */}
      {/* <Pagination onClick={handlePageClick}>{items}</Pagination> */}
      {/* <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={500}
          marginPagesDisplayed={3}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        /> */}

      {/* <Pagination> */}
      {/* <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last /> */}
      {/* </Pagination> */}
      {/* </div> */}
    </div>
  );
}

export default App;
