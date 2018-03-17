import React, { Component } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATCH = 'http://image.tmdb.org/t/p/w1280';

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
      <MovieWrapper backdrop={`${BACKDROP_PATCH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={movie.id}>
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} />
          </Overdrive>
          <div>
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetail;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;

const MovieInfo = styled.div`
  background: #fff;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
  margin-left: 20px;
  }
  img {
  position: relative;
  top: -5rem;
`;


