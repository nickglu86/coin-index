import React from "react";
import { Carousel, Card, Stack, Button } from "react-bootstrap";

const NewsFeed = ({ news, length }) => {
  const NewsFeedCarousel = () => {
    var newsCarouselContent = [];
    for (var i = 0; i < length / 3; i++) {
      var newsItemsRow = [];
      for (var k = 0; k < 3; k++) {
        newsItemsRow.push(
          <Card style={{ width: "22rem", height: "340px" }} key={k}>
            <Card.Body>
              <img src={news[i * 3 + k].image} height="180" />
              <Card.Title className="mt-1">{news[i * 3 + k].title}</Card.Title>
              <Button variant="light" 
                      style={{position: "absolute",
                          right: "16px",
                          bottom: "10px"}}
                      href={news[i * 3 + k].url}    
                          >
                  Read More
                </Button>
            </Card.Body>
          </Card>
        );
      }
      newsCarouselContent.push(
        <Carousel.Item style={{ height: 500 }} key={i}>
          <Stack
            direction="horizontal"
            className="h-100 justify-content-center align-items-center"
            gap={3}
          >
            {newsItemsRow}
          </Stack>
        </Carousel.Item>
      );
    }
    return <Carousel style={{ height: 500 }} bg="Light">{newsCarouselContent}</Carousel>;
  };
  return (
    <section>
      <div className="crypto-news">
        <div className="bg-opacity-25 container-fluid">
          <NewsFeedCarousel />
        </div>
      </div>
    </section>
  );
};

export default NewsFeed;
