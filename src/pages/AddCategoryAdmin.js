import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useMutation } from 'react-query';
import NavbarAdmin from '../components/NavbarAdmin';
import { API } from '../config/api';

export default function AddCategoryAdmin() {
  console.clear();

  const title = 'Category admin';
  document.title = 'DumbMerch | ' + title;

  let navigate = useNavigate();
  const [category, setCategory] = useState({
    name: '',
  });

  const {name} = category

  const handleChange = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const body = JSON.stringify(category);

      const response = await API.post('/category', body, config);
      console.log(body);

      navigate('/category-admin')
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <NavbarAdmin title={title} />
      <Container className="py-5">
        <Row>
          <Col xs="12">
            <div className="text-header-category mb-4">Add Category</div>
          </Col>
          <Col xs="12">
            <form onSubmit={(e) => handleSubmit.mutate(e)}>
              <input
                type="text"
                onChange={handleChange}
                placeholder="category"
                value={name}
                name="name"
                className="input-edit-category mt-4"
              />
              <div className="d-grid gap-2 mt-4">
                <Button type="submit" variant="success" size="md">
                  Add
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
