import React from 'react'
import style from "./index.module.scss";
import axios from 'axios';
import { useUser } from '../../../Context/userContext';

function MyProduct({ item }) {

   const { user, setUser, Logout } = useUser();

   async function DeleteProduct(id) {
      try {
         const response = await axios.delete(`http://localhost:4728/product/${id}`, {
            headers: {
               Authorization: `Bearer ${user.token}`
            }
         })
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <div id={style.MyProduct}>
         <div className={style.imgBox}>
            <img src={item.image.url} alt="" />
            <button onClick={()=>DeleteProduct(item._id)} className={`ProductButton ${style.productBtn}`}>Delete</button>
         </div>

         <div className={style.textBox}>
            <h2 className={style.title}>{item.title}</h2>
            <p className={style.infoBox}><span data={'Year'} className={`${style.year} ${style.info}`}>{item.info.year}</span> &sdot; <span data={'Body Type'} className={`${style.body} ${style.info}`}>{item.info.body}</span> &sdot; <span style={{ color: `${item.info.color}` }} data={'Color'} className={`${style.color} ${style.info}`}>{item.info.color}</span> &sdot; <span data={'Condition'} className={`${style.condition} ${style.info}`}>{item.info.condition}</span></p>
            <div className={`${style.maxBidBox}`}>
               {
                  item.maxBid ?
                     <>
                        <p className={style.bidText}><span className={style.text}>Current Bid:</span> <span className={style.bid}>{item.maxBid} $</span></p>
                        <p className={style.offerText}><span className={style.text}>By:</span> <span className={style.offer}>{item.maxBidOffer.username}</span></p>
                     </>
                     :
                     <p className={style.bidText}><span className={style.text}>Starting Bid:</span> <span className={style.bid}>{item.openingBid} $</span></p>
               }
            </div>

            <div className={style.timeBox}>{
               (Date.now() < new Date(item.startTime).getTime())
                  ?
                  <>
                     <span data={'Days'} className={`${style.days} ${style.time}`}>{item.remainingTimeToStart.days}</span>
                     <span className={`${style.timeSeperator}`}>:</span>
                     <span data={'Hours'} className={`${style.hours} ${style.time}`}>{item.remainingTimeToStart.hours}</span>
                     <span className={`${style.timeSeperator}`}>:</span>
                     <span data={'Minutes'} className={`${style.minutes} ${style.time}`}>{item.remainingTimeToStart.minutes}</span>
                     <span className={`${style.timeSeperator}`}>:</span>
                     <span data={'Seconds'} className={`${style.seconds} ${style.time}`}>{item.remainingTimeToStart.seconds}</span>
                     <span className={style.to}>To Start</span>
                  </>
                  :
                  (Date.now() < new Date(item.endTime).getTime())
                     ?
                     <>
                        <span data={'Days'} className={`${style.days} ${style.time}`}>{item.remainingTimeToEnd.days}</span>
                        <span className={`${style.timeSeperator}`}>:</span>
                        <span data={'Hours'} className={`${style.hours} ${style.time}`}>{item.remainingTimeToEnd.hours}</span>
                        <span className={`${style.timeSeperator}`}>:</span>
                        <span data={'Minutes'} className={`${style.minutes} ${style.time}`}>{item.remainingTimeToEnd.minutes}</span>
                        <span className={`${style.timeSeperator}`}>:</span>
                        <span data={'Seconds'} className={`${style.seconds} ${style.time}`}>{item.remainingTimeToEnd.seconds}</span>
                        <span className={style.to}>To End</span>
                     </>
                     :
                     <span className={`${style.ended}`}>Auction Ended</span>
            }</div>
         </div>
      </div>
   )
}

export default MyProduct