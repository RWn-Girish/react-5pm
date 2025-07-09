import { Badge, Button, Card } from "react-bootstrap"

const ProductDetail = ({product, handleDelete, handleEdit}) => {
    return (
        <Card  style={{ width: '18rem' , margin: '10px' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title} - {product.id}</Card.Title>
              <Card.Text>
                {product.desc}
              </Card.Text>
                <Badge bg="warning">
                {product.category}
                </Badge>
                <br />
                <br />
                <br />
              <Button onClick={() =>handleEdit(product.id)} variant="warning">Edit</Button> &nbsp;&nbsp;
              <Button onClick={() =>handleDelete(product.id)} variant="danger">Delete</Button>
            </Card.Body>
          </Card>
    )
}


export default ProductDetail;