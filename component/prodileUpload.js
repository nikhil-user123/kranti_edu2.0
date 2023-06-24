"use client";
import { useState } from 'react';
import { Modal, Button, Text, Input } from "@nextui-org/react";

import axios from 'axios';

const UploadForm = ({open, onClose}) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  // const [visible, setVisible] = useState(false);
  // const handler = () => setVisible(true);
 
  const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };


  const handleSubmit = async (event) => {
    // event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('name', name);
      formData.append('token', token);


      await axios.post(`https://kranti-back.onrender.com/upload`, formData);


      // Handle success
      console.log('File uploaded successfully');
    } catch (error) {
      // Handle error
      console.error(error);
    }
    onClose();
  };

  return (
    <>
      {/* <Button auto ghost color="error" onPress={handler}>
        Open modal
      </Button> */}
      {/* <form onSubmit={handleSubmit} encType="multipart/form-data" className='center_of_page'> */}
        {/* <input type="file" name="image" accept="image/*" onChange={handleImageChange} required />
      <input type="text" name="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} /> */}
        {/* <button type="submit">Upload</button> */}

        <Modal
          closeButton
          preventClose
          aria-labelledby="modal-title"
          open={open}
          onClose={onClose}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Update 
              <Text b size={18}>
                Profile
              </Text>
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Input
              // clearable
              // bordered
              // fullWidth
              // color="primary"
              size="lg"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              type="text"
              name="name"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onPress={onClose}>
              Close
            </Button>
            <Button auto onPress={handleSubmit}>
              upload
            </Button>
          </Modal.Footer>
        </Modal>

    </>


  );
};

export default UploadForm;
