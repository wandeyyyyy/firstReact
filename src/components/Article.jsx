import React from 'react'
import {img1,img2,img3,arrRight} from '../assets'

const Article = () => {

    const articleItem = [
        {
            "id": 0,
            "image": img1,
            "heading": "Disease detection, check up in the laboratory",
            "paragraph": "In this case, the role of the health laboratory is very important to do a disease detection..."
        },
        {
            "id": 1,
            "image": img2,
            "heading": "Herbal medicines that are safe for consumption",
            "paragraph": "Choose your doctor from thousands of specialist, general, and trusted hospitals"
        },
        {
            "id": 2,
            "image": img3,
            "heading": "Natural care for healthy facial skin",
            "paragraph": "Buy  your medicines with our mobile application with a simple delivery system"
        },
        
    ]


    const getItem = articleItem.map((art) =>
    <div class="col-sm-12 col-md-6 col-lg-4">
      <div key={art.id} className='article-main'>
          <div className="article-head">
              <img src={art.image} alt="" className='article-img' />
          </div>
          <div className="card-art-body">
              <h4 className='artHead'>{art.heading}</h4>
              <p className='artPara'>{art.paragraph}</p>
              <button className='artBtn'>Read More <img src={arrRight} alt=""className='ml-2' /></button>
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

export default Article