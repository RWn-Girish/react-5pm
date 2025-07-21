import { useEffect, useState } from "react";
import { getStorageData, setStorageData } from "../Services/storageData";
import { Badge, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

const Home = () => {
  const [productData, setProductData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortData, setSortData] = useState("");
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  }

  const handleDelete = (id) => {
    let data = getStorageData();
    let updateData = data.filter(product => product.id != id)
    // console.log(updateData);
    setStorageData(updateData);
    setProductData(updateData);
  }

  const handleChanged = (e) => {
    setSearch(e.target.value);
  }

  const handleClear = () => {
    let data = getStorageData();
    setProductData(data);
  }

  // const handleASC = () => {
  //   let data = getStorageData();
  //   let updataData = data.sort((a ,b) => {
  //       // return a.title.localeCompare(b.title)
  //       return a.price - (b.price)
  //   })
  //   // console.log("Sorting Data: ", updataData);
  //   setProductData(updataData);
  // }
  // const handleDESC = () => {
  //   let data = getStorageData();
  //   let updataData = data.sort((a ,b) => {
  //       // return a.title.localeCompare(b.title)
  //       return b.price - (a.price)
  //   })
  //   // console.log("Sorting Data: ", updataData);
  //   setProductData(updataData);
  // }

  const handleSorting = () => {
    let data = getStorageData();
    let updateData;
    let [field, type] = sortData.split(",");
    console.log(typeof field)
      if(type == "asc" && field != "price"){
        updateData = data.sort((a ,b) => {
          return a[field].localeCompare(b[field])
        })
      }else if(type == 'asc' && field == 'price'){
        updateData = data.sort((a ,b) => {
          return a[field] - (b[field])
        })
      }else if(type == "desc" && field != "price"){
        updateData = data.sort((a ,b) => {
          return b[field].localeCompare(a[field])
        })
      }else if(type == 'desc' && field == 'price'){
        updateData = data.sort((a ,b) => {
          return b[field] - (a[field])
        })
      }

      setProductData(updateData);
  }

  const handleSearch = () => {
    console.log("Search ==> ",search);
    let data = getStorageData();
    let updateData = data.filter(prod => prod.title == search || prod.price == search || prod.category == search)
    // console.log(updateData);
    setProductData(updateData);
    setSearch("");
  }

  useEffect(() => {
    let data = getStorageData();
    setProductData(data);
  }, []);
  return (
    <>
      <h1>Home</h1>
      <div>
        <input type="text" name="search" value={search} onChange={handleChanged} /> &nbsp;
        <Button onClick={handleSearch}>Search</Button> &nbsp;
        <Button onClick={handleClear}>Clear</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        {/* <Button onClick={handleASC} variant="secondary">ASC</Button>&nbsp;&nbsp;
        <Button onClick={handleDESC} variant="danger">DESC</Button> */}

        <select name = "sortData" onChange={e => setSortData(e.target.value)}>
          <option>Select for Sorting</option>
          <option value={"title,asc"}>Name - A to Z</option>
          <option value={"title,desc"}>Name - Z to A</option>
          <option value={"price,asc"}>Price - A to Z</option>
          <option value={"price,desc"}>Price - Z to A</option>
          <option value={"category,asc"}>Category - A to Z</option>
          <option value={"category,desc"}>Category - Z to A</option>
        </select>
        <Button onClick={handleSorting}>Sorting</Button>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {productData.map((product) => (
        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>
              {product.title} - {product.id}
            </Card.Title>
            <Card.Text>{product.desc}</Card.Text>
            <Card.Text>Price: <strong>{product.price}</strong></Card.Text>
            <Badge bg="warning">{product.category}</Badge>
            <br />
            <br />
            <br />
            <Button onClick={() => handleEdit(product.id)} variant="warning">
              Edit
            </Button>{" "}
            &nbsp;&nbsp;
            <Button onClick={() => handleDelete(product.id)} variant="danger">
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
      </div>
    </>
  );
};

export default Home;

