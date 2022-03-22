import { useState } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import styles from './contact.module.scss'

const StaticForm = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: 'StaticForms - Contact Form',
    honeypot: '', // if any value received in this field, form submission will be ignored.
    message: '',
    replyTo: '@', // this will set replyTo of email to email address entered in the form
    accessKey: '3535f053-33b7-446c-af7a-b1edbed34330' // get your access key from https://www.staticforms.xyz
  });

  const [response, setResponse] = useState({
    type: '',
    message: ''
  });

  const handleChanges = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmits = async e => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' }
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: 'success',
          message: 'Thank you for reaching out to us.'
        });
      } else {
        setResponse({
          type: 'error',
          message: json.message
        });
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({
        type: 'error',
        message: 'An error occured while submitting the form'
      });
    }
  };
  return (
    <div>
      
      <Container className='p-3'>
        <Row>
        <Col md='auto'>
            <Card border="info">
                <Card.Header>Number</Card.Header>
                <Card.Body>
                  {/* <Card.Title>Number</Card.Title> */}
                  <Card.Text>
                  <Col><h3><a className='text-muted' type="tel" href="tel:046501703">046-501703</a></h3></Col>
                  </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col md='auto'>
            <Card border="info" >
                <Card.Header>Email</Card.Header>
                <Card.Body>
                  {/* <Card.Title>Number</Card.Title> */}
                  <Card.Text>
                  <Col><h3><a className='text-muted' type="email" href="mailto:hotelunitedinn77@gmail.com">hotelunitedinn77@gmail.com</a></h3></Col>
                  </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col md='auto'>
            <Card border="info">
                <Card.Header>Address</Card.Header>
                <Card.Body>
                  {/* <Card.Title>Number</Card.Title> */}
                  <Card.Text>
                  <Col><h3><a className='text-muted' href='https://g.page/hotel-united?share'>E - W Hwy, Lalbandi 45801, Sarlahi</a></h3></Col>
                  </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        {/* <Col><h3><a type="email" href="email:hotelunitedinn77@gmail.com">hotelunitedinn77@gmail.com</a></h3></Col> */}
        {/* <Col><h3><a className='text-muted' href='https://g.page/hotel-united?share'>E - W Hwy, Lalbandi 45801, Sarlahi</a></h3></Col> */}
        </Row>
      </Container>
       <Container>
  <Row className="justify-content-md-center auto themeColor">
    <Col>
    <Card bg="info">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14212.823688254408!2d85.627012!3d27.0552473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x828c2d4e7a7ce818!2sHotel%20United%20Inn!5e0!3m2!1sen!2snp!4v1647598712926!5m2!1sen!2snp" width="100%" height="650" style={{border:0,padding:10}}  allowfullscreen="" loading="lazy"></iframe>
    </Card>
    </Col>
  </Row>
</Container>
      <div className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column' />
            <div className='column  is-two-thirds'>
              <div
                className={
                  response.type === 'success'
                    ? 'tile box notification is-primary'
                    : 'is-hidden'
                }
              >
                <p className="d-flex justify-content-center"> <h1> {response.message}</h1></p>
              </div>
              <div
                className={
                  response.type === 'error'
                    ? 'tile box notification is-danger'
                    : 'is-hidden'
                }
              >
                {/* <p>{response.message}</p> */}
              </div>
              <div
                className={response.message !== '' ? 'is-hidden' : 'columns'}
              >
                <div className={styles.contact}>
                  <h2>Contact Form</h2>
                  
                  <form
                    action='https://api.staticforms.xyz/submit'
                    method='post'
                    onSubmit={handleSubmits}
                  >
                    <div className='field m-2 p-2'>
                      <label className='label form-label'>Your Name</label>
                      <div className='control'>
                        <input
                          className='input form-control'
                          type='text'
                          placeholder='Name'
                          name='name'
                          onChange={handleChanges}
                          required
                        />
                      </div>
                    </div>
                    <div className='field m-2 p-2'>
                      <label className='label form-label'>Your Email</label>
                      <div className='control'>
                        <input
                          className='input form-control'
                          type='email'
                          placeholder='Email'
                          name='email'
                          onChange={handleChanges}
                          required
                        />
                      </div>
                    </div>
                    <div className='field' style={{ display: 'none' }}>
                      <label className='label'>Title</label>
                      <div className='control'>
                        <input
                          type='text'
                          name='honeypot'
                          style={{ display: 'none' }}
                          onChange={handleChanges}
                        />
                        <input
                          type='hidden'
                          name='subject'
                          onChange={handleChanges}
                        />
                      </div>
                    </div>
                    <div className='field m-2 p-2'>
                      <label className='label form-label'>Message</label>
                      <div className='control'>
                        <textarea
                          className='textarea form-control'
                          placeholder='Your Message'
                          name='message'
                          onChange={handleChanges}
                          required
                        />
                      </div>
                    </div>
                    <div className='field is-grouped  m-2 p-2'>
                      <div className='control'>
                        <button className={styles.buttonu} type='submit'>
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='column' />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default StaticForm;