import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

const movies = [
  {
    id: 1,
    title: "Stranger Things",
    image:
      "https://imagenes.elpais.com/resizer/v2/ABTX3J3NYND65OVMNDKRMYGS4Q.jpg?auth=0383f56445d200024a64207b9cd06794b1fc78f7491459798bf715dd929157a1&width=980&height=980&focal=1579%2C395",
  },
  {
    id: 3,
    title: "The Family Man",
    image:
      "https://media.assettype.com/thequint/2019-09/ae28ee31-9d3e-4687-a191-e42911a6d083/Full_Family.jpg?auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0",
    link: "https://www.primevideo.com/detail/The-Family-Man/0KRGHG8WZ8RZ2STP1MIE8ZW2KP",
  },
  {
    id: 4,
    title: "The Boys",
    image:
      "https://filmdaze.net/wp-content/uploads/2022/07/the-boys-s2-e1657567147693.jpg",
    link: "https://www.primevideo.com/detail/0LTVQJYJ2GD3W64X6BIORWEMUR/",
  },
  {
    id: 5,
    title: "Sacred Games",
    image:
      "https://c.ndtvimg.com/sacred-games-netflix_625x300_1528263901682.jpg",
    link: "https://www.netflix.com/in/title/80115328",
  },
   {
    id: 6,
    title: "Asur",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-KyTeRtY8BFiLe4EFJ832fj3afC5deBcPMg&s",
    link: "https://www.imdb.com/title/tt11912196/episodes/",
  },
  {
    id: 7,
    title: "Khakee-The bihar chapter",
    image:
      "https://im.idiva.com/content/2025/Mar/1---2025-03-20T142524448_67dbd811bbdd9.jpg?w=900&h=675&cc=1",
    link: "https://www.netflix.com/in/title/81290872",
  },
   {
    id: 8,
    title: "Scam 1992",
    image:
      "https://i0.wp.com/iimun.in/blog/wp-content/uploads/2021/03/scam-1992.jpg?fit=1200%2C675&ssl=1",
    link: "https://www.netflix.com/in/title/81290872https://www.sonyliv.com/shows/scam-1992-the-harshad-mehta-story-1700000292",
  },
];

function MovieCarousel() {
  return (
    <Carousel fade pause="hover" interval={300}>
      {movies.map((movie) => (
        <Carousel.Item key={movie.id}>
          <img
            className="d-block w-100"
            src={movie.image}
            alt={movie.title}
            style={{
              height: "300px",
              width:"300px",
              objectFit: "cover",
              backgroundImage: "cover",
              borderRadius: "5px",
            }}
          />
          <Carousel.Caption>
            <h3 className="text-white fw-bold">{movie.title}</h3>
            <Button
              variant="danger"
              href={movie.link}
              target="_blank"
              className="mt-2"
            >
             tAZZA mOVIES
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MovieCarousel;
