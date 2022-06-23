import React from 'react';
import { useSelector } from 'react-redux';
import './HomePageStyle.css';
import Carousel from 'react-bootstrap/Carousel';

const HomePage = (props) => {
  const { username, shows } = useSelector((state) => state.auth);
  console.log(shows[0]);

  return (
    <div className="body">
      <div>Welcome, {username}</div>
      <Carousel indicators={false}>
        {shows.map((show) => (
          <Carousel.Item interval={5000} key={show.id} className="showCarousel">
            <img src={show.imageUrl} className="carouselImg" alt={show.title} />
            <Carousel.Caption className="caption">
              <h3>{show.title}</h3>
              <p>{` Progress: ${show.currentEp}/${show.episodeTotal}`}</p>
              <p>{`Rating: ${show.rating}/10`}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
        {/* <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="/first-slide.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="/second-slide.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="/third-slide.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default HomePage;
