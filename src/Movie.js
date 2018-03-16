import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        {this.props.movie.title}
      </div>
    );
  }
}

export default Movie;
