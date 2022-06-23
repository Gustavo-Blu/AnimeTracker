import React from 'react';
import { useSelector } from 'react-redux';
import './AllShowsStyle.css';

const AllShows = (props) => {
  const { shows } = useSelector((state) => state.auth);

  return (
    <div id="allShows" className="body">
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
  );
};

export default AllShows;
