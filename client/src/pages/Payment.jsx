/** @format */

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Carousel, CarouselItem, Container } from "react-bootstrap";

function Payment() {
  document.title = "Payment | DeweTour";
  const getTrip = JSON.parse(localStorage.getItem("getTrip"));

  return (
    <>
      <Navbar />
      <Container>
        <Carousel variant="dark">
          {getTrip !== null &&
            getTrip.map((item, id) => {
              return (
                <CarouselItem className="p-5" key={id}>
                  <div
                    style={{
                      boxShadow: "2px 2px 20px grey",
                      padding: "50px",
                      borderRadius: "10px",
                      marginTop: "50px",
                    }}
                  >
                    <div className="d-flex justify-content-between mb-4">
                      <img src="/images/icon.png" alt="" />
                      <div className="text-end">
                        <h1 className="fw-bold ">Booking</h1>
                        <h4>Saturday, 22 july 2020</h4>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex gap-5">
                        <div className="me-5">
                          <h3 className="fw-bold">{item.title}</h3>
                          <p
                            style={{
                              color: "#959595",
                              fontWeight: "bold",
                              marginBottom: "30px",
                            }}
                          >
                            {item.country}
                          </p>
                          <span
                            style={{
                              color: "#3CF71E",
                              backgroundColor: "#E9FDEB",
                              fontWeight: "bold",
                              padding: "5px",
                              borderRadius: "10px",
                            }}
                          >
                            Approve
                          </span>
                        </div>
                        <div className="d-flex">
                          <div className="mx-5">
                            <div>
                              <h5 className="fw-bold">Date trip</h5>
                              <p
                                style={{ color: "#959595", fontWeight: "bold" }}
                              >
                                {item.date}
                              </p>
                            </div>
                            <div>
                              <h5 className="fw-bold">Accomodation</h5>
                              <p
                                style={{ color: "#959595", fontWeight: "bold" }}
                              >
                                {item.accomodation}
                              </p>
                            </div>
                          </div>
                          <div className="mx-5">
                            <div>
                              <h5 className="fw-bold">Duration</h5>
                              <p
                                style={{ color: "#959595", fontWeight: "bold" }}
                              >
                                {item.day} Day {item.night} Night
                              </p>
                            </div>
                            <div>
                              <h5 className="fw-bold">Transportation</h5>
                              <p
                                style={{ color: "#959595", fontWeight: "bold" }}
                              >
                                {item.transport}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center me-5">
                        <img src="/images/barcode.svg" alt="#" />
                        <h4>TCK0101</h4>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
        </Carousel>
        <div className="d-flex justify-content-end my-5">
          <Button
            style={{
              backgroundColor: "#FFAF00",
              padding: "10px 50px",
              border: "none",
            }}
          >
            PAY
          </Button>
        </div>
      </Container>
      <Footer />
    </>
  );
}
export default Payment;
