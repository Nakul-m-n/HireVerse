import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

const SortedJobReq = () => {
    const [bookmarked, setBookmarked] = useState(false);
    
      const toggleBookmark = () => {
        setBookmarked(!bookmarked);
      };
  return (
    <div style={{padding:'100px'}} >
    <h2 className="my-3"> Sorted Job Request's</h2>
    <div
      
      className="container d-flex justify-content-between align-items-center "
    >
        
      <Card className="my-3 " style={{ width: "13rem" }}>
        <Card.Img
          variant="top"
          src="https://www.w3schools.com/howto/img_avatar.png"
        />
        <Card.Body>
          <Card.Title>Jhon carter</Card.Title>
          <Card.Text>
            Placed at abc company as React Developer with 3.2 LPA
          </Card.Text>
          <Button
            variant="outline-primary"
            onClick={toggleBookmark}
            className="border-0"
          >
            <i
              className={`fa-solid fa-bookmark ${
                bookmarked ? "text-warning" : ""
              }`}
            ></i>
          </Button>
        </Card.Body>
      </Card>

      <Card className="my-3 " style={{ width: "13rem" }}>
        <Card.Img
          variant="top"
          src="https://www.w3schools.com/howto/img_avatar.png"
        />
        <Card.Body>
          <Card.Title>Jhon carter</Card.Title>
          <Card.Text>
            Placed at abc company as React Developer with 3.2 LPA
          </Card.Text>
          <Button
            variant="outline-primary"
            
            className="border-0"
          >
            <i
              className={`fa-solid fa-bookmark `}
            ></i>
          </Button>
        </Card.Body>
      </Card>

      
    </div>
</div>
  )
}

export default SortedJobReq