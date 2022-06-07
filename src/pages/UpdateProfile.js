import Navbar from '../components/Navbar';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function UpdateProfile() {
    const title = 'Update Profile';
    document.title = 'DumbMerch | ' + title;

    return (
        <>
        <Navbar title={title} />
        <Container className="py-5">
        <Row>
          <Col xs="12">
            <div className="text-header-category mb-4">Update Profile</div>
          </Col>
          <Col xs="12">
            {/* <form onSubmit={(e) => handleSubmit.mutate(e)}> */}
            <form>
              {/* {preview && ( */}
                <div>
                  <img
                    // src={preview}
                    style={{
                      maxWidth: '150px',
                      maxHeight: '150px',
                      objectFit: 'cover',
                    }}
                    alt="Profile picture"
                  />
                </div>
              {/* )} */}
              <input
                type="file"
                id="upload"
                name="image"
                hidden
              />
              <label for="upload" className="label-file-add-product">
                Upload file
              </label>
              <input
                type="text"
                placeholder="Profile Name"
                name="name"
                className="input-edit-category mt-4"
              />
              <input
                type="Email"
                placeholder="Profile Email"
                name="email"
                className="input-edit-category mt-4"
              />
              <input
                type="number"
                placeholder="Phone Number"
                name="phone"
                className="input-edit-category mt-4"
              />
              <input
                type="text"
                placeholder="Gender"
                name="gender"
                className="input-edit-category mt-4"
              />
              <textarea
                placeholder="Address"
                name="address"
                className="input-edit-category mt-4"
                style={{ height: '130px' }}
              ></textarea>

              <div className="d-grid gap-2 mt-4">
                <Button type="submit" variant="success" size="md">
                  Save
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
        </>
    )
}