import React from 'react'
import {Search, Drug, Consult,Details,Care, Track} from '../assets'

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
            "image": Drug,
            "heading": "Online pharmacy",
            "paragraph": "Choose your doctor from thousands of specialist, general, and trusted hospitals"
        },
        {
            "id": 2,
            "image": Consult,
            "heading": "Consultation",
            "paragraph": "Buy  your medicines with our mobile application with a simple delivery system"
        },
        {
            "id": 3,
            "image": Details,
            "heading": "Details Info",
            "paragraph": "Free consultation with our trusted doctors and get the best recomendations"
        },
        {
            "id": 4,
            "image": Care,
            "heading": "Emergency Info",
            "paragraph": "You can get 24/7 urgent care for yourself or your children and your lovely family"
        },
        {
            "id": 5,
            "image":Track,
            "heading": "Tracking",
            "paragraph": "Track and save your medical history and health data "
        },
    ]


    const getItem = serviceItem.map((item) =>
    <div class="col-sm-12 col-md-6 col-lg-4">
      <div key={item.id} className='card-main'>
          <div className="card-head">
              <img src={item.image} alt="" />
          </div>
          <div className="cardItem-body">
              <h4 className='itemHead'>{item.heading}</h4>
              <p className='itemPara'>{item.paragraph}</p>
          </div>
      </div>
      </div>
    )
  return (
<>
            {getItem}
           
     </>      
 
  )
}

export default Service