/** @format */
import { Modal, Button, Form, NavLink } from "react-bootstrap";

export const ModalForm = (props) => {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <img
          src="/images/palm.png"
          alt="#"
          width="30%"
          style={{ position: "absolute" }}
        />
        <img
          src="/images/hibiscus.png"
          alt="#"
          style={{ position: "absolute", left: "433px", borderRadius: "6px" }}
        />
        <div className="px-5 pb-3">
          <p className="fs-3 fw-bold text-center " style={{ paddingTop: 50 }}>
            Form
          </p>
          <Form className="mt-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold">Full Name</Form.Label>
              <Form.Control
                className="p-2 mb-3"
                // onChange={OnChangeHandler}
                name="fullname"
                // value={email}
                type="text"
                // onChange={(e) => (user.fullname = e.target.value)}
              />
              <Form.Label className="fw-bold">Gender</Form.Label>
              <Form.Control
                className="p-2 mb-3"
                // onChange={OnChangeHandler}
                name="gender"
                // value={email}
                type="text"
                // onChange={(e) => (user.email = e.target.value)}
              />
              <Form.Label className="fw-bold">Phone</Form.Label>

              <Form.Control
                type="text"
                // onChange={OnChangeHandler}
                name="phone"
                // value={password}
                // onChange={(e) => (user.password = e.target.value)}
              />
            </Form.Group>
            <NavLink href="/Payment">
              <Button
                style={{
                  backgroundColor: "#FFAF00",
                  fontWeight: "bold",
                  border: "none",
                  padding: "10px 40px",
                  marginBottom: "30px",
                }}
              >
                BOOK NOW
              </Button>
            </NavLink>
          </Form>
        </div>
      </Modal>
    </>
  );
};
export default ModalForm;
