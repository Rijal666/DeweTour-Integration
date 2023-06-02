/** @format */

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Table } from "react-bootstrap";
import { ModalApprove } from "../components/ModalApprove";
import { useState } from "react";

function Income() {
  document.title = "Income | DeweTour";
  const [showApprove, setShowApprove] = useState(false);

  const handleClose = () => {
    setShowApprove(false);
  };

  const handleShowApprove = () => {
    handleClose(true);
    setShowApprove(true);
  };

  return (
    <>
      <Navbar />
      <Container>
        <div>
          <h1 className="fw-bold my-5">Income Transaction</h1>
          <Table responsive striped>
            <thead>
              <tr>
                <th>No</th>
                <th>Users</th>
                <th>Trip</th>
                <th>Bukti Transfer</th>
                <th>Status Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Farhan kebab</td>
                <td>Bekasi</td>
                <td>bca.jpg</td>
                <td>Pending</td>
                <td>
                  <span onClick={handleShowApprove}>
                    <img src="/images/alat.svg" alt="" />
                  </span>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Farhan kebab</td>
                <td>Bekasi</td>
                <td>bca.jpg</td>
                <td>Pending</td>
                <td>
                  <img src="/images/alat.svg" alt="" />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Farhan kebab</td>
                <td>Bekasi</td>
                <td>bca.jpg</td>
                <td>Pending</td>
                <td>
                  <img src="/images/alat.svg" alt="" />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Farhan kebab</td>
                <td>Bekasi</td>
                <td>bca.jpg</td>
                <td>Pending</td>
                <td>
                  <img src="/images/alat.svg" alt="" />
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Farhan kebab</td>
                <td>Bekasi</td>
                <td>bca.jpg</td>
                <td>Pending</td>
                <td>
                  <img src="/images/alat.svg" alt="" />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
      <ModalApprove show={showApprove} onHide={handleClose} />
      <Footer />
    </>
  );
}
export default Income;
