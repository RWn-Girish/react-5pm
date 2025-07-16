import generateUniqueId from "generate-unique-id";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getStorageData, setStorageData } from "../Services/storageData";

const AddProduct = () => {
  const navigate = useNavigate();
  const intialState = {
    title: "",
    desc: "",
    price: "",
    category: "",
    image: "",
  };
  const [inputForm, setInputForm] = useState(intialState);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = generateUniqueId({
      length: 6,
      useLetters: false,
    });
    inputForm.id = id;
    //   console.log("Submitted : => ", inputForm);
    let data = getStorageData();
    data.push(inputForm);
    setStorageData(data);
    navigate("/");
  };
  return (
    <>
      <Container className="m-3">
        <h2>Add Product Page</h2>
        <Form className="mt-4" onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Title
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="Enter Title"
                name="title"
                value={inputForm.title}
                onChange={handleChanged}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Description
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="Enter Description"
                name="desc"
                value={inputForm.desc}
                onChange={handleChanged}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Price
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="number"
                placeholder="Enter Price"
                name="price"
                value={inputForm.price}
                onChange={handleChanged}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Category
            </Form.Label>
            <Col sm="6">
              <Form.Select
                aria-label="Default select example"
                name="category"
                onChange={handleChanged}
              >
                <option>Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Mobiles">Mobiles</option>
                <option value="Appliances">Appliances</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Image
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="Enter Image URL"
                name="image"
                value={inputForm.image}
                onChange={handleChanged}
              />
            </Col>
          </Form.Group>

          <Button type="submit">Add Product</Button>
        </Form>
      </Container>
    </>
  );
};

export default AddProduct;
