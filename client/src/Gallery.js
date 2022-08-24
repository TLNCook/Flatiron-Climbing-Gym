import Form from 'react-bootstrap/Form';

function Gallery () {
  return (
    <div>
        <Form>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload an image to the gallery!</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
        </Form>
    </div>
  )
}

export default Gallery;