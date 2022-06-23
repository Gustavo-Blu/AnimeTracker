import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCirclePlay,
  faStar as solidStar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import './AllSongsStyle.css';

const AllSongs = (props) => {
  const { songs } = useSelector((state) => state.auth);

  return (
    <div id="allSongs" className="body">
      <h2>All Songs</h2>
      <table className="table table-dark table-stripped table-hover songTable">
        <thead>
          <tr
            // className="header"
            className="table-dark"
          >
            <td />
            <td>#</td>
            <td>Title</td>
            <td>Artist</td>
            <td>Type</td>
            <td>Fav</td>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => {
            return (
              <tr key={song.id}>
                <td>
                  <FontAwesomeIcon
                    className="icons"
                    icon={faCirclePlay}
                    size="2x"
                  />
                  {/* <i className="fa fa-play-circle" /> */}
                </td>
                <td className="songNum">{index + 1}</td>
                <td>{song.title}</td>
                <td>{song.artists[0].name}</td>
                <td>{song.songType}</td>
                <td>
                  <FontAwesomeIcon
                    className="icons"
                    icon={song.isFav ? solidStar : emptyStar}
                    size="2x"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllSongs;
