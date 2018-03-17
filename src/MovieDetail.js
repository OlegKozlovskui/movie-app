import React, { Component } from 'react';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATCH = 'http://image.tmdb.org/t/p/w1920';

class MovieDetail extends Component {

  state = {
    movie: {}
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=624e613d482d2849ffcdd4c581101150&language=en-US`);
      const movie = await res.json();

      this.setState({
        movie
      });

    } catch(e) {
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <div>
        <img src={`${BACKDROP_PATCH}${movie.backdrop_path}`} />
        <img src={`${POSTER_PATH}${movie.poster_path}`} />
        <h1>{movie.title}</h1>
        <h3>{movie.release_date}</h3>
        <p>{movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetail;
