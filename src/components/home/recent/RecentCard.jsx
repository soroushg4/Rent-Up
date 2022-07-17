import React , {useState} from 'react'
import { list } from '../../data/Data'
import './recent.css'
const RecentCard = () => {

    const [redClick , setRedClick] = useState(false)
  return (
    <>
        <div className="content grid3 mtop">
            {list.map((val, index)=>{
                const {cover, category , location , name , price , type} = val;
                return(
                    <div className="box shadow" key={index}>
                        <div className="img">
                            <img src={cover} alt="" />
                        </div>
                        <div className="text">
                            <div className="category flex">
                                <span style={{background: category == "For Sale" ? "#25b57910" : "ff98001a" 
                                , color: category == "For Sale" ? "#25b579" : "ff9800"}}>{category}</span>
                                
                                <i onClick={() => setRedClick(!redClick)} 
                                className={redClick ? 'ri-heart-fill red' : 'ri-heart-fill grey'}>   
                                </i>
                            </div>
                            <h4>{name}</h4>
                            <p>
                            <i className="ri-map-pin-2-fill"></i>
                            {location}
                            </p>
                        </div>
                        <span className='br'></span>
                        <div className="button btn-recent flex">
                            <div>
                                <button className='btn2'>{price}</button>
                                {/* <label htmlFor="">/sqft</label> */}
                            </div>
                            <span>{type}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default RecentCard