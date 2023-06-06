/** @format */

import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../config/api";
import { useQuery, useMutation } from "react-query";
import Footer from "../components/Footer";
import { Button, Container } from "react-bootstrap";
import Swal from "sweetalert2";

const Payment = ({ dataTrans }) => {
  document.title = "Payment | DeweTour";
  const navigate = useNavigate();

  console.log(dataTrans);

  const form = JSON.parse(localStorage.getItem("forms"));
  const forms = form[0];

  let { id } = useParams();
  console.log(id, "payment");

  const { data: Trip } = useQuery("tripCache", async () => {
    const response = await API.get(`/trip/${id}`);
    return response.data.data;
  });

  const handleTransaction = useMutation(async (e) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      let data = {
        name: forms?.name,
        gender: forms?.gender,
        phone: forms?.phone,
        counter_qty: dataTrans?.qty,
        total: dataTrans?.pay,
        status: "success",
        trip_id: Trip?.id,
      };
      console.log(data, "ini anjing");
      const response = await API.post("/transaction", data, config);
      console.log("transaction success : ", response);

      navigate("/Profile");
      Swal.fire({
        position: "center",
        icon: "success",
        title:
          "Your payment will be confirmed within 1 x 24 hours To see orders click Here thank you",
        showConfirmButton: true,
      });
    } catch (err) {
      alert(err);
    }
  });

  console.log(new Date().toDateString());

  console.log(Trip);
  return (
    <>
      <Navbar />
      <Container>
        <div
          style={{
            boxShadow: "2px 2px 20px grey",
            borderRadius: "10px",
          }}
        >
          <div style={{ margin: "50px 0", padding: "50px" }}>
            <div className="d-flex justify-content-between mb-4">
              <img src="/images/icon.png" alt="" />
              <div className="text-end">
                <h1 className="fw-bold ">Booking</h1>
                <h4>{new Date().toDateString()}</h4>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-5">
                <div className="me-5">
                  <h3 className="fw-bold">{Trip?.title}</h3>
                  <p
                    style={{
                      color: "#959595",
                      fontWeight: "bold",
                      marginBottom: "30px",
                    }}
                  >
                    {Trip?.country.name}
                  </p>
                  <span
                    style={{
                      color: "#EC7A7A",
                      backgroundColor: "#FCDDD8",
                      fontWeight: "bold",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                  >
                    Waiting Payment
                  </span>
                </div>
                <div className="d-flex">
                  <div className="mx-5">
                    <div>
                      <h5 className="fw-bold">Date trip</h5>
                      <p style={{ color: "#959595", fontWeight: "bold" }}>
                        {Trip?.date_trip}
                      </p>
                    </div>
                    <div>
                      <h5 className="fw-bold">Accomodation</h5>
                      <p style={{ color: "#959595", fontWeight: "bold" }}>
                        {Trip?.accomodation}
                      </p>
                    </div>
                  </div>
                  <div className="mx-5">
                    <div>
                      <h5 className="fw-bold">Duration</h5>
                      <p style={{ color: "#959595", fontWeight: "bold" }}>
                        {Trip?.day} Day {Trip?.night} Night
                      </p>
                    </div>
                    <div>
                      <h5 className="fw-bold">Transportation</h5>
                      <p style={{ color: "#959595", fontWeight: "bold" }}>
                        {Trip?.transportation}
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
            <div>
              <div
                className="d-flex mb-1"
                style={{ gap: "100px", borderBottom: "1px solid " }}
              >
                <h5>No</h5>
                <h5>Full Name</h5>
                <h5>Gender</h5>
                <h5>Phone</h5>
              </div>
              <div
                className="d-flex text-muted"
                style={{
                  gap: "100px",
                  borderBottom: "1px solid",
                  marginBottom: "10px",
                }}
              >
                <h5 className="me-4">1</h5>
                <h5 className="me-4">{forms?.name}</h5>
                <h5 className="me-4">{forms?.gender}</h5>
                <h5 className="me-4">{forms?.phone}</h5>
                <div>
                  <h5>Qty : {dataTrans?.qty}</h5>
                </div>
              </div>
              <div className="d-flex justify-content-end pe-5">
                <h5>Total :</h5>
                <h5 style={{ color: "red" }}>{dataTrans?.qty * Trip?.price}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end my-5">
          <Button
            onClick={() => handleTransaction.mutate()}
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
};
export default Payment;
