/** @format */
import Navbars from "../components/Navbar";
import { Form, Container } from "react-bootstrap";
import { useContext } from "react";
import { useMutation, useQuery } from "react-query";
import { UserContext } from "../context/userContext";
import { API } from "../config/api";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

function Profile() {
  document.title = "Profile | DeweTour";

  const [state] = useContext(UserContext);

  const [image, setImage] = useState("/images/profile.svg");
  const [formProfile, setFormProfile] = useState({
    id: 0,
    image: "",
  }); //Store profile data

  const { data: transactions } = useQuery("transactionCache", async () => {
    const response = await API.get("/transactions");
    return response.data.data;
  });
  console.log(transactions, "ini jancook");

  // async function getDataUpdateProfile() {
  //   const responseProfile = await API.get("/profile");
  //   if (responseProfile.data.data.photo !== "") {
  //     setImage(responseProfile.data.data.photo);
  //   }
  // }

  // useEffect(() => {
  //   getDataUpdateProfile();
  // }, []);

  const handleChange = (e) => {
    setFormProfile({
      ...formProfile,
      [e.target.name]:
        e.target.type === "file" ? e.terget.files : e.target.value,
    });

    // Create image url for preview

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.trget.files[0]);
      setImage(url);
    }
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      // Store data with FormData as object
      const formData = new FormData();
      formData.set("image", formProfile?.image[0], formProfile?.image[0]?.name);

      // await disini berfungsi untuk menunggu sampai promise tersebut selesai dan mengembalikkan hasilnya
      const response = await API.post("/profile", formData, config);
      console.log(response.data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Add Profile Success",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <Navbars />
      <Container>
        <div>
          <div
            style={{
              margin: "100px",
              boxShadow: "2px 2px 20px grey",
              padding: "20px 50px",
              borderRadius: "10px",
            }}
          >
            <div className="d-flex justify-content-between">
              <div>
                <h1 className="fw-bold mb-5">Personal Info</h1>
                <div className="d-flex gap-3 mb-3">
                  <img
                    src="/images/vector.svg"
                    alt=""
                    width="50px"
                    height="50px"
                  />
                  <div>
                    <h5 className="fw-bold">{state.user.fullname}</h5>
                    <p style={{ color: "#8A8C90", fontWeight: "bold" }}>
                      Full name
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-3 mb-3">
                  <img
                    src="/images/mail.svg"
                    alt=""
                    width="50px"
                    height="50px"
                  />
                  <div>
                    <h5 className="fw-bold">{state.user.email}</h5>
                    <p style={{ color: "#8A8C90", fontWeight: "bold" }}>
                      Email
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-3 mb-3">
                  <img
                    src="/images/phone.svg"
                    alt=""
                    width="50px"
                    height="50px"
                  />
                  <div>
                    <h5 className="fw-bold">{state.user.phone}</h5>
                    <p style={{ color: "#8A8C90", fontWeight: "bold" }}>
                      Mobile phone
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-3 mb-3">
                  <img
                    src="/images/place.svg"
                    alt=""
                    width="50px"
                    height="50px"
                  />
                  <div>
                    <h5 className="fw-bold">{[state.user.address]}</h5>
                    <p style={{ color: "#8A8C90", fontWeight: "bold" }}>
                      Addres
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="mb-5"
                  style={{ width: "300px", height: "300px" }}
                >
                  <img src={image} alt="" width="100%" />
                </div>
                <Form.Group onSubmit={(e) => handleSubmit.mutate(e)}>
                  <Form.Label
                    style={{
                      width: "100%",
                      backgroundColor: "#FFAF00",
                      cursor: "pointer",
                    }}
                    className="rounded text-center mt-5"
                  >
                    <div>
                      <p
                        className="py-2 mb-0"
                        style={{
                          fontSize: "20px",
                          color: "white",
                        }}
                      >
                        Change Photo Profile
                      </p>
                      <div>
                        <Form.Control
                          type="file"
                          name="image"
                          id="image"
                          onChange={handleChange}
                          hidden
                        />
                      </div>
                    </div>
                  </Form.Label>
                </Form.Group>
              </div>
            </div>
          </div>
        </div>
        <h1 className="my-5 fw-bold">History Trip</h1>

        {transactions
          ?.filter((transaction) => transaction.user.id === state.user.id)
          ?.map((item, index) => {
            return (
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
                        <h3 className="fw-bold">{item.trip.title}</h3>
                        <p
                          style={{
                            color: "#959595",
                            fontWeight: "bold",
                            marginBottom: "30px",
                          }}
                        >
                          {item.trip.country.name}
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
                            <p style={{ color: "#959595", fontWeight: "bold" }}>
                              {item.trip.datetrip}
                            </p>
                          </div>
                          <div>
                            <h5 className="fw-bold">Accomodation</h5>
                            <p style={{ color: "#959595", fontWeight: "bold" }}>
                              {item.trip.accomodation}
                            </p>
                          </div>
                        </div>
                        <div className="mx-5">
                          <div>
                            <h5 className="fw-bold">Duration</h5>
                            <p style={{ color: "#959595", fontWeight: "bold" }}>
                              {item.trip.day} Day {item.trip.night} Night
                            </p>
                          </div>
                          <div>
                            <h5 className="fw-bold">Transportation</h5>
                            <p style={{ color: "#959595", fontWeight: "bold" }}>
                              {item.trip.transportation}
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
                      <h5 className="me-4">{item.name}</h5>
                      <h5 className="me-4">{item.gender}</h5>
                      <h5 className="me-4">{item.phone}</h5>
                      <div>
                        <h5>Qty : {item.counter_Qty}</h5>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end pe-5">
                      <h5>Total :</h5>
                      <h5 style={{ color: "red" }}>{item.total}</h5>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </Container>
      <Footer />
    </>
  );
}

export default Profile;
