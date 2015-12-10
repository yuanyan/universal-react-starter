var React = require('react');

module.exports = React.createClass({

  // We initialise its state by using the `props` that were passed in when it
  // was first rendered. We also want the button to be disabled until the
  // component has fully mounted on the DOM
  getInitialState: function() {
    return {
      movies: this.props.movies || [],
      disabled: true
    }
  },

  // Once the component has been mounted, we can enable the button
  componentDidMount: function() {
    this.setState({disabled: false})
  },

  // Then we just update the state whenever its clicked by adding a new item to
  // the list - but you could imagine this being updated with the results of
  // AJAX calls, etc
  handleClick: function() {
    this.setState({
      items: this.state.movies.concat('Item ' + this.state.items.length)
    })
  },

  // For ease of illustration, we just use the React JS methods directly
  // (no JSX compilation needed)
  // Note that we allow the button to be disabled initially, and then enable it
  // when everything has loaded
  render: function() {
    return (
      <div>
        {
          this.state.movies.map(function(movie, index){
            return (<div key={index}>
            <img style={styles.poster} src={movie.posters.thumbnail} />
            <div style={styles.info}>
              <span style={styles.title}>{movie.title}</span>
            </div>
            </div>)
          })
        }
      </div>
    )
  },
});

var styles = {
  poster: {
    backgroundColor: '#dddddd',
    height: '93px',
    marginRight: '10px',
    width: '60px'
  },
  info: {
    display: 'inline-block',
    flex: 1
  },
  title: {
    fontSize: '16px',
  }
}
