import { Button, Modal } from "react-bootstrap";

export default function MovieModal({ movie, show, setShow }) {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = (e) => {
  //   const selectedId = e.target.getAttribute("data-id");
  //   const selectedMovie = moviesFilter.find(
  //     (movie) => Number(selectedId) === movie.id
  //   );
  //   setModalMovie({ ...selectedMovie });
  //   setShow(true);
  // };
  return (
    <div>
      <Modal
        className="modal text-center modal-dialog-centered"
        show={show}
        onHide={() => setShow(false)}
        centered
      >
        <Modal.Header className="d-flex justify-content-center p-0 m-0">
          <Modal.Title className="d-flex flex-column justify-content-center">
            <div>
              <h2 className="bg-secondary text-white">{movie.title}</h2>
              <span className="fs-6">{movie.release_date}</span>
              <p className="fs-6 text-danger">Rating: {movie.vote_average}</p>
            </div>
            <div>
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <img src={"/img/Image-Not-Available.png"} alt={movie.title} />
              )}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{movie.overview}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
