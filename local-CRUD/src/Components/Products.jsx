import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import generateUniqueId from 'generate-unique-id';
import ProductDetail from "./ProductDetail";


const getSotrageData = () => {
  return JSON.parse(localStorage.getItem("Products")) || []
}

const Products = () => {
    const intialState = {
        id: "",
        title: "",
        desc: "",
        price: "",
        category: "",
        image: ""
    }
    const [inputForm, setInputForm] = useState(intialState);
    const [productData, setProductData] = useState(getSotrageData());
    const [isEdit, setIsEdit] = useState(false)

    const handleChanged = (e) => {
        const {name, value} = e.target;
        setInputForm({
            ...inputForm,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isEdit){
         let updateData =  productData.map(product => {
            if(product.id == inputForm.id){
              return inputForm
            }else{
              return product
            }
          })

          setProductData(updateData);
          setIsEdit(false);
        }else{
          // let id = Math.floor(Math.random() * 100000)
          let id = generateUniqueId({
            length: 6,
            useLetters: false
          });
          inputForm.id = id
          // console.log("Submitted : => ", inputForm);
          setProductData([...productData, inputForm]);
        }
        setInputForm(intialState);
    }

    const handleDelete = (id) => {
      // console.log(id);
      let updatedData = productData.filter(product => product.id != id)
      // console.log("After Delete: ",updatedData);
      setProductData(updatedData);
    }
    
    const handleEdit = (id) => {
      let signleRec = productData.find(product => product.id == id)
      // console.log(signleRec);
      setInputForm(signleRec);
      setIsEdit(true);
    }

    useEffect(()=> {
        localStorage.setItem("Products", JSON.stringify(productData));
    }, [productData])

  return (
    <>
      <Container>
        <h1>{isEdit ? "Edit" : "Add"} Product</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm="2">
              Title
            </Form.Label>
            <Col sm="6">
              <Form.Control type="text" placeholder="Enter Title" name="title" value={inputForm.title} onChange={handleChanged} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm="2">
              Description
            </Form.Label>
            <Col sm="6">
              <Form.Control type="text" placeholder="Enter Description" name="desc" value={inputForm.desc} onChange={handleChanged} />
            </Col>
          </Form.Group>
          
          <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm="2">
              Price
            </Form.Label>
            <Col sm="6">
              <Form.Control type="number" placeholder="Enter Price" name="price" value={inputForm.price} onChange={handleChanged} />
            </Col>
          </Form.Group>
          
          <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm="2">
              Category
            </Form.Label>
            <Col sm="6">
              <Form.Select aria-label="Default select example" name="category" onChange={handleChanged}>
                    <option>Select Category</option>
                    <option value="Electronics" selected={inputForm.category == "Electronics"}>Electronics</option>
                    <option value="Fashion" selected={inputForm.category == "Fashion"}>Fashion</option>
                    <option value="Mobiles" selected={inputForm.category == "Mobiles"}>Mobiles</option>
                    <option value="Home Appliances" selected={inputForm.category == "Home Appliances"}>Home Appliances</option>
                </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm="2">
              Image
            </Form.Label>
            <Col sm="6">
              <Form.Control type="text" placeholder="Enter Image URL" name="image" value={inputForm.image} onChange={handleChanged} />
            </Col>
          </Form.Group>

            <Button type="submit">{isEdit ? "Update" : "Add"} Product</Button>
        </Form>
      </Container>
      <hr />
      <Container>
        <h1>View Data</h1>
        <div className="d-flex">
          {
          productData.map(product => (
            <ProductDetail key={product.id} product={product} handleDelete={handleDelete} handleEdit={handleEdit} />
          ))
        }
        </div>
      </Container>
    </>
  );
};

export default Products;
