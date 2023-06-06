/** @format */

import Card from "react-bootstrap/Card";
import { Container, NavLink } from "react-bootstrap";

const Cards = ({ data, search }) => {
  console.log(data, "ini data ");
  console.log(search, "ini search ");
  return (
    <>
      {data?.length !== 0 ? (
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
          {data
            ?.filter((itemSearch) => {
              if (search === "") {
                return itemSearch;
              } else if (
                itemSearch.country.name
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase())
              ) {
                return itemSearch;
              }
            })
            .map((trip, i) => {
              return (
                <Card
                  key={i}
                  style={{
                    width: "300px",
                    padding: "10px",
                    boxShadow: "2px 2px 20px grey",
                  }}
                >
                  <NavLink href={`/Detail/${trip?.id}`}>
                    <Card.Img variant="top" src={trip?.image} />
                    <Card.Body>
                      <Card.Title>{trip?.title}</Card.Title>
                      <div className="d-flex my-0">
                        <Card.Text style={{ color: "#FFAF00" }}>
                          {trip?.price}
                        </Card.Text>
                        <Card.Text
                          className="ms-auto"
                          style={{ color: "#878787" }}
                        >
                          {trip?.country.name}
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </NavLink>
                </Card>
              );
            })}
        </div>
      ) : (
        <h1>Trip not found</h1>
      )}
    </>
  );
};

export default Cards;
