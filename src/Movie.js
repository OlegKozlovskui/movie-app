import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  }


  render() {
    return (
      <div>
        <h3>{this.props.movie.title}</h3>
      </div>
    );
  }
}

export default Movie;
