import React from 'react';
import { connect } from 'react-redux';
import './HomePageStyle.css';

/**
 * COMPONENT
 */
const HomePage = (props) => {
  const { username } = props;
  const { songs, artists, shows, playlists } = props.auth;

  console.log(props.auth);
  return (
    <div>
      <h3>Welcome, {username}</h3>

      <div id="allShows">
        <h2>All Shows: </h2>
        {shows[0] ? (
          shows.map((show) => {
            return (
              <div key={show.id} className="show">
                <h4>{show.title}</h4>
                <img src={show.imageUrl} />
                <div className="showInfo">
                  <p>
                    Rating: <span>{show.rating}/10</span>
                  </p>
                  <p>
                    Episode:{' '}
                    <span>{`${show.currentEp}/${show.episodeTotal}`}</span>
                  </p>
                  <p>Language: {show.language}</p>
                </div>
              </div>
            );
          })
        ) : (
          <h4>Why not add some shows.....</h4>
        )}
      </div>
      {/* <i class="bi bi-alarm"></i> */}

      <div id="allSongs">
        <h2>All Songs</h2>
        <table>
          <thead>
            <tr>
              <th />
              <th>#</th>
              <th>Title</th>
              <th>Artist</th>
              <th>Fav</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => {
              return (
                <tr key={song.id}>
                  <td>
                    <i className="fa fa-play-circle" />
                  </td>
                  <td className="songNum">{index + 1}</td>
                  <td>{song.title}</td>
                  <td>{song.artists[0].name}</td>
                  <td>{song.isFav}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
    auth: state.auth,
  };
};

export default connect(mapState)(HomePage);
