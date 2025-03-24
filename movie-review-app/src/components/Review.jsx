function Review(movie) {
    return (
        <div className="card">
            <img src={movie.image} alt="poster" />
            <h2>{`${movie.name}`}</h2>
            <p>{`${movie.description}`} </p>
                <button onClick={Review}>Post Review</button>
        </div>
    );
}
export default Review;