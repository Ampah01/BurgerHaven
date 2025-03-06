import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import "./PressPage.css";

const galleryItems = [
  { type: "image", src: "/images/instagram1.jpg" },
  { type: "image", src: "/images/instagram2.jpg" },
  { type: "video", src: "/video/file2.mp4", poster: "/images/instagram1.jpg" },
  { type: "image", src: "/images/instagram5.jpg" },
  { type: "video", src: "/video/file4.mp4", poster: "/images/instagram2.jpg" },
  { type: "image", src: "/images/instagram8.jpg" },
];

const PressPage = () => {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShow = (item) => {
    setSelectedItem(item);
    setShow(true);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Gallery</h2>
      <div className="row g-3">
        {galleryItems.map((item, index) => (
          <div className="col-md-4 col-sm-6" key={index}>
            <div className="gallery-item" onClick={() => handleShow(item)}>
              {item.type === "image" ? (
                <img src={item.src} alt="Gallery" className="img-fluid rounded shadow-sm" />
              ) : (
                <video className="img-fluid rounded shadow-sm" src={item.src} poster={item?.poster} controls />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Lightbox (Fix applied) */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Body className="p-3">
          {selectedItem?.type === "image" ? (
            <img src={selectedItem?.src} alt="Gallery" className="img-fluid" />
          ) : selectedItem?.type === "video" ? (
            <video src={selectedItem?.src} controls className="img-fluid" />
          ) : null}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PressPage;
