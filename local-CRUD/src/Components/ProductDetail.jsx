import { Badge, Button, Card } from "react-bootstrap"

const ProductDetail = ({product}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.desc}
              </Card.Text>
                <Badge bg="warning">
                {product.category}
                </Badge>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
    )
}


export default ProductDetail;