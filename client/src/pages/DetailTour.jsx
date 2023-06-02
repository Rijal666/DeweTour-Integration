/** @format */
import Navbars from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import ModalForm from "../components/ModalForm";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

function Detail() {
  document.title = "Detail | DeweTour";
  const params = useParams();
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const id = parseInt(params.id);
  const trips = JSON.parse(localStorage.getItem("getTrip"));
  const detail = trips[id];

  const handleClose = () => {
    setShowForm(false);
  };

  const handleShowForm = () => {
    handleClose(true);
    setShowForm(true);
  };

  // const incrementCart = async (id, orderQuantity) => {
  //   const response = await API.patch(`/increase/${id}`);
  //   setTotal({
  //     id: id,
  //     order_quantity: orderQuantity + 1,
  //   });
  // };

  // const decrementCart = async (id, orderQuantity) => {
  //   if (orderQuantity > 1) {
  //     const response = await API.patch(`/decrease/${id}`);
  //     setTotal({
  //       id: id,
  //       order_quantity: orderQuantity - 1,
  //     });
  //   }
  // };

  const Add = () => {
    if (count === 10) return;
    setCount(count + 1);
  };

  const Less = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  // const Total = () => {
  //   {count} * {detail.price}
  // }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Navbars />
      <div style={{ margin: "50px 130px" }}>
        <h1 className="fw-bold m-0">{detail.title}</h1>
        <h4 style={{ color: "#A8A8A8", fontWeight: "bold" }}>
          {detail.country}
        </h4>
        <img src={detail.Image} className="mb-2" alt="" width="100%" />
        <Carousel responsive={responsive}>
          <div>
            <img src="/images/bekasi.png" alt="" />
          </div>
          <div>
            <img src="/images/bekasi2.png" alt="" />
          </div>
          <div>
            <img src="/images/bekasi3.png" alt="" />
          </div>
          <div>
            <img src="/images/bekasi.png" alt="" />
          </div>
        </Carousel>
        <h4 className="fw-bold my-3">Information Trip</h4>
        <div className="d-flex justify-content-between">
          <div>
            <p style={{ color: "#A8A8A8" }}>Accommodation</p>
            <div className="d-flex gap-3">
              <img src="/images/hotel.svg" alt="" width="25px" height="25px" />
              <h5 className="fw-bold">{detail.accomodation}</h5>
            </div>
          </div>
          <div>
            <p style={{ color: "#A8A8A8" }}>Transportation</p>
            <div className="d-flex gap-3">
              <img src="/images/plane.svg" alt="" width="25px" height="25px" />
              <h5 className="fw-bold">{detail.transport}</h5>
            </div>
          </div>
          <div>
            <p style={{ color: "#A8A8A8" }}>Eat</p>
            <div className="d-flex gap-3">
              <img src="/images/meal.svg" alt="" width="25px" height="25px" />
              <h5 className="fw-bold">{detail.eat}</h5>
            </div>
          </div>
          <div>
            <p style={{ color: "#A8A8A8" }}>Duration</p>
            <div className="d-flex gap-3">
              <img src="/images/time.svg" alt="" width="25px" height="25px" />
              <h5 className="fw-bold">
                {detail.day} Day {detail.night} Night
              </h5>
            </div>
          </div>
          <div>
            <p style={{ color: "#A8A8A8" }}>Date Trip</p>
            <div className="d-flex gap-3">
              <img
                src="/images/calendar.svg"
                alt=""
                width="25px"
                height="25px"
              />
              <h5 className="fw-bold">{detail.date}</h5>
            </div>
          </div>
        </div>
        <h4 className="fw-bold mt-5">Description</h4>
        <p style={{ color: "#A8A8A8" }}>{detail.desc}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="d-flex gap-2">
            <h2 style={{ color: "#FFAF00", fontWeight: "bold" }}>
              IDR. {detail.price}
            </h2>
            <h2 className="fw-bold"> / Person</h2>
          </div>
          <div>
            <img
              src="/images/Minus.png"
              alt=""
              width="40px"
              onClick={Less}
              style={{ cursor: "pointer" }}
            />
            <span className="mx-3">{count}</span>
            <img
              src="/images/Plus.png"
              alt=""
              width="40px"
              onClick={Add}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between my-5">
          <h2 className="fw-bold">Total :</h2>
          <h2 style={{ color: "#FFAF00", fontWeight: "bold" }}>
            IDR. 12,000,000
          </h2>
        </div>
        <div className="d-flex justify-content-end">
          <Button
            onClick={handleShowForm}
            style={{
              backgroundColor: "#FFAF00",
              fontWeight: "bold",
              border: "none",
              padding: "10px 40px",
            }}
          >
            BOOK NOW
          </Button>
        </div>
      </div>
      <ModalForm show={showForm} onHide={handleClose} />
      <Footer />
    </>
  );
}
export default Detail;
