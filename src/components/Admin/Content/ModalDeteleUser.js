import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deteleUser } from "../../../sevices/apiSevices";
import { toast } from "react-toastify";
const ModalDeteleUser = (props) => {
  const { show, setShow, dataDetele } = props;

  const handleClose = () => setShow(false);
  const handleSubmitDeteleUser = async () => {
    let data = await deteleUser(dataDetele.id);
    console.log("check data", data);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      // await props.fetchListUsers();
      props.setCurrenPage(1);
      await props.fetchListUsersWithPaginate(1);
    }
    if (data && data.EC !== 0) {
      toast.success(data.EM);
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>confirm detele the user ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          are you sure to detele this user. email{" "}
          <b>{dataDetele && dataDetele.email ? dataDetele.email : ""}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmitDeteleUser();
            }}
          >
            confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeteleUser;
