/** @format */

import Card from "react-bootstrap/Card";
import { Container, NavLink } from "react-bootstrap";
import { API } from "../config/api";
import { useQuery } from "react-query";

function Cards() {
  let { data: trips } = useQuery("tripsCache", async () => {
    const response = await API.get("/trips");
    return response.data.data;
  });

  let asceding = [];
  if (trips !== undefined) {
    asceding = [...trips];
    asceding.sort((a, b) => b.id - a.id);
  }

  return (
    <Container>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        style={{
          marginBottom: "50px",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {asceding?.map((item) => {
          return (
            <Card
              key={item.id}
              style={{
                width: "300px",
                padding: "10px",
                boxShadow: "2px 2px 20px grey",
              }}
            >
              <NavLink href={`/Detail/${item.id}`}>
                <Card.Img variant="top" src={item.Image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <div className="d-flex my-0">
                    <Card.Text style={{ color: "#FFAF00" }}>
                      {item.price}
                    </Card.Text>
                    <Card.Text className="ms-auto" style={{ color: "#878787" }}>
                      {item.country}
                    </Card.Text>
                  </div>
                </Card.Body>
              </NavLink>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}

export default Cards;
