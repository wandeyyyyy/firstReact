import React from 'react'

const Service = () => {

    const serviceItem = [
        {
            "id": 0,
            "image": Search,
            "heading": "Search doctor",
            "paragraph": "Choose your doctor from thousands of specialist, general, and trusted hospitals"
        },
        {
            "id": 1,
            "image": Jar,
            "heading": "Search doctor",
            "paragraph": "Choose your doctor from thousands of specialist, general, and trusted hospitals"
        },
        {
            "id": 2,
            "image": Record,
            "heading": "Search doctor",
            "paragraph": "Choose your doctor from thousands of specialist, general, and trusted hospitals"
        },
        {
            "id": 3,
            "image": Record2,
            "heading": "Search doctor",
            "paragraph": "Choose your doctor from thousands of specialist, general, and trusted hospitals"
        },
        {
            "id": 4,
            "image": First,
            "heading": "Search doctor",
            "paragraph": "Choose your doctor from thousands of specialist, general, and trusted hospitals"
        },
        {
            "id": 5,
            "image": Record3,
            "heading": "Search doctor",
            "paragraph": "Choose your doctor from thousands of specialist, general, and trusted hospitals"
        },
    ]


    const getItem = serviceItem.map((item) =>
      <div key={item.id}>
          <div className="card-head">
              <img src={item.image} alt="" />
          </div>
          <div className="cardItem-body">
              <h4>{item.heading}</h4>
              <p>{item.paragraph}</p>
          </div>
      </div>
    )
  return (
    <div>
        
    </div>
  )
}

export default Service