

const Modal = ({ movie, onClose }) => {
  const backdropUrl = `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <img className="modal-backdrop" src={backdropUrl} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Runtime:</strong> {movie.runtime ? `${movie.runtime} min` : "N/A"}</p>
        <p><strong>Genres:</strong> {movie.genres ? movie.genres.map(g => g.name).join(', ') : "N/A"}</p>
        <p><strong>Overview:</strong> {movie.overview}</p>
      </div>
    </div>
  );
};

export default Modal;


