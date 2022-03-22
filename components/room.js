import { useState, useEffect } from 'react';
import { Modal, Button} from "../node_modules/react-bootstrap"



const Room = () => {
  const [contact, setContact] = useState({
    email: '',
    fullName: '',
    people: '',
    number: '',
    roomType: '',
    subject: 'Room Booking Form',
    honeypot: '', // if any value received in this field, form submission will be ignored.
    message: '',
    checkIn: '',
    checkOut: '',
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
      console.log(contact)
      let data = {
        ...contact
      }
      const messaga = "Full Name:  "+"<b>"+data.fullName+"</b><br/>"+ "Phone Number:"+"(<b>" +data.number + ")</b><br/>"+"Number of People: <b>"+data.people+"</b><br/>" +" Room of Type: <b>" + data.roomType + "</b><br/>Check In: <b><i>" + data.checkIn +"</i></b><br>"+"Check Out: <b><i>"+ data.checkOut +"</b></i>";
      data.message = messaga;
      console.log(data.fullName)
      const res = await fetch('https://api.staticforms.xyz/submit', {

        method: 'POST',
        body: JSON.stringify(data),
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
  // useEffect(() => {
  //   const [roomImg, setRoomImg] = useState(roomImg)

  // })
  // min date picker
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
};
// background: linear-gradient(to right, #ffafbd, #ffc3a0);


  let [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [RoomDes, SetRoomDes] = useState([
    {
          image: "https://i.imgur.com/dJ9RVYv.jpg",
          images: "https://i.imgur.com/JVGd1IL.jpg",
        title: "Super-Delux Room", 
        discription: "Master Double Bed With Bathing Tub." ,
        discription1: "Single Double Bed With A/c and Bathing Tub." ,
        discription2: "Multichannel color 32' Flat LCD Television." ,
        id:3 
        },
        {
          image: "https://i.imgur.com/PDk0ON5.jpg",
          images: "https://i.imgur.com/Sqk98dG.jpg",
        title: "Delux Room", 
        discription: "Double Bed Room With A/c and Bath Tub." ,
        discription1: "Single Double Bed With Centralized Air Conditioning" ,
        discription2: "Large screen LED TV." ,
        id:4 
        },
        {
          image: "https://i.imgur.com/1zF8E5x.jpg",
          images: "https://i.imgur.com/aYrwHsr.jpg",
          title: "Family Rooms", 
          discription: "Master Double Bed." ,
          discription1: "Single Double Bed With Flat Screen TV." ,
        discription2: "Room comes with a work desk and Air Condition." ,
        id:2 
        },
        {
          image: "https://i.imgur.com/4T6EqYV.jpg",
          images: "https://i.imgur.com/dJ9RVYv.jpg",
          title: 'Couple Room', 
          discription: "Master Double Bed Room with A/c." ,
          discription1: "Single Double Bed With A/c and Bathing Tub." ,
          discription2: "we have best coupple rooms with full ac at low price ." ,
          id:1 
        },
        
        {
          image: "https://i.imgur.com/LEGScbw.jpg",
          images: "https://i.imgur.com/KUR7sEF.jpg",
        title: "Standard Room", 
        discription: "Double Bed Room With A/c in cheapest price." ,
        discription1: "Single Double Bed With large Screen TV. " ,
        discription2: "we have best standard rooms with full ac at low price." ,
        id:8
        },
        {
          image: "https://i.imgur.com/J7ilzGF.jpg",
          images: "https://i.imgur.com/hCkCYwB.jpg",
        title: "Meeting Hall 'A'",
        discription: "Number Of People: 25" ,
        discription1: "Multichannel color 32' Flat LCD Television." ,
        discription2: "Quite Enviroment With Centralized Air Conditioning" ,
        id:98 
      },
      {
        image: "https://i.imgur.com/YayU7vb.jpg",
        images: "https://i.imgur.com/hCkCYwB.jpg",
      title: "Meeting  'B'",
      discription: "Number Of People: 60" ,
      discription1: "large HD 1080p Display Projector With Quality Sound" ,
      discription2: "Quite Enviroment With Centralized Air Conditioning" ,
      id:99
    }
      ]);
    return ( 
        <div>
          <div>
            { RoomDes.map(RoomDes => {
              // console.log(RoomDes.discription)
              return(
                <section key={RoomDes.id} className='two_halves_content'>
        <div className="container">
          <div className="row">
          {/* { roomImg.map(roomImg => { */}
            <div className="col-12 col-md-7">
            <div className="about_thumb d-flex">
              <div className="img_1">
                <a href='../gallery'>
                <img src={RoomDes.image} className='img-fluid img-thumbnail rounded-0 border-0 p-0' height='250' alt="" />

                </a> 
              </div>
              <div className="img_2">
                <img src={RoomDes.images} className='img-fluid img-thumbnail rounded-0 border-0 p-0' height='250' alt="" />
              </div>
            </div>
          </div>
          
            <div className="col-12 col-md-5 d-flex align-items-center ">
              <div className="fist_content d-flex align-items-center  mb-3 mb-md-0">

                <div>
                  
                  <h2>{RoomDes.title}</h2>
                  <ul>
                  <p>
                    <li> { RoomDes.discription } </li>
                  </p>
                  <p>
                    <li> { RoomDes.discription1 } </li>
                  </p>
                  <p>
                    <li> { RoomDes.discription2 } </li>
                  </p></ul>
                  {/* <button type="button" className="btn btn-outline-secondary btn-lg my-3" data-toggle="modal" data-target="#myModal">
           <a className='text-danger'> Book A Room</a>
          </button> */}
                    <Button className="btn btn-lg my-3" id='bookARoom' onClick={handleShow}>Book</Button>

    </div>
              </div>


            </div>
          
          </div>
        </div>
      </section>
              )
            })}
          </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book A Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <div
                className={
                  response.type === 'success'
                    ? 'tile box notification is-primary'
                    : 'is-hidden'
                }
              >
                <p className="d-flex justify-content-center bg-danger text-white">{response.message}</p>
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
              </div>
        <form
        id='formModal'
        action='https://api.staticforms.xyz/submit'
        method='post'
        onSubmit={handleSubmits}
        >
             <div className="form-group">
                  <label >Email address</label>
                  <input type="email" className="form-control" name="email" onChange={handleChanges} placeholder="Enter email" />
          </div>
          <div className="form-group">
                  <label >Full Name</label>
                  <input type="text" className="form-control" name="fullName" onChange={handleChanges} placeholder="Your Name" required/>
          </div>
          <div className="form-group">
                  <label >Phone Number</label>
                  <input type="tel" className="form-control" onChange={handleChanges} name="number" placeholder="98*******" required />
          </div>
          <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Room Type</label>
              <select className="form-control" onChange={handleChanges} name='roomType' required>
                <option>Super-Delux Room</option>
                <option>Delux Room</option>
                <option>Family Rooms</option>
                <option>Couple Room</option>
                <option>Standard Room</option>
                <option>Meeting Hall</option>
              </select>
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
          <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">No. of People</label>
              <select className="form-control" onChange={handleChanges} id="example" name='people' required>
                <option>1 Person</option>
                <option>2 People</option>
                <option>3 People</option>
                <option>4 People</option>
                <option>5 People</option>
                <option>more than 5+ People</option>
              </select>
          </div>
          <div className="form-group">
              <label htmlFor="checkIn">Check In</label>
              <input className="form-control" onChange={handleChanges} type="date" name='checkIn' placeholder='Check In' min={disablePastDate()} required/>
          </div>
          <div className="form-group">
              <label htmlFor="checkOut">Check Out</label>
              <input className="form-control" onChange={handleChanges} type="date" name='checkOut' placeholder='Check Out' min={disablePastDate()} required/>
          </div>
          
          
        </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        <Button variant="primary" form='formModal' type='submit'>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
     );
}
 
export default Room;