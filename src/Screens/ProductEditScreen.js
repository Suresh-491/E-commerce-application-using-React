
import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button,Row,Col } from 'react-bootstrap'
import Message from '../components/Message'


import FormContainer from '../components/FormContainer'

const ProductEditScreen = () => {
  

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState(null)



  const submitHandler = async (e) => {
    e.preventDefault()
  
    
      const product = {
        
        "name": name,
        "image": image,
        "description": description,
        "brand": brand,
        "category": category,
        "price": price,
        "countInStock": countInStock,
        "rating": 4,
        "numReviews": 10
      }
 
     try {
      await fetch("http://localhost:8000/products",{
        method : 'POST',
        body : JSON.stringify(product),
        headers : {'Content-Type' : 'application/json'}
       })
       setMessage("Product Updated Successfully")
     } catch (error) {
      console.log(error)
     }
    
    
  
}

  return (
    <>
    
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
    
       
        <FormContainer>
      <h1>Edit Products</h1>
      {message && <Message variant='success'>{message}</Message>}
      {/* {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />} */}
      <Form onSubmit={submitHandler} >
        <Form.Group className='mb-3' controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Product name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3' controlId='price'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type='price'
            placeholder='Enter Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3' controlId='brand'>
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type='brand'
            placeholder='Brand'
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3' controlId='countInStock'>
          <Form.Label>Count In Stock</Form.Label>
          <Form.Control
            type='countInStock'
            placeholder='countInStock'
            value={countInStock}
            onChange={(e) => setCountInStock(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3' controlId='description'>
          <Form.Label>Descritption</Form.Label>
          <Form.Control
            type='description'
            placeholder='Enter description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3' controlId='image'>
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Image URL'
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3' controlId='category'>
          <Form.Label>Category</Form.Label>
          <Form.Control
            type='category'
            placeholder='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>


        <Button type='submit' variant='primary'>
          Add
        </Button>
      </Form>

    </FormContainer>
      
    </>
  )
}

export default ProductEditScreen