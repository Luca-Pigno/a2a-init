import React from "react";

// style
import './Game.scss';

import Bottle from '../../../assets/images/bottle.png';

const Game = () => {

  const destroyDiv = (e) => {
    e.currentTarget.style.display = "none";
  }

  const imgs = [Bottle, Bottle, Bottle, Bottle];

  // const numbersOfDiv = 40;

  // const generateDiv = () => {
  //   for(let i = 0; i < 40; i++) {
  //     let left = Math.round(Math.random() * (350 - 200) + 200);

  //     objs.push(

  //     )
  //   }
  //   console.log(objs)
  // }
  // generateDiv();


  return (
    <div className="game-container">
      <div className="roller-container">
        <img src={Bottle} className="bottle-obj" />
        <div className="first-obj" onClick={destroyDiv} />
        <div className="second-obj" onClick={destroyDiv} />
        <div className="third-obj" onClick={destroyDiv} />
      </div>
      <div className="mask-container" />

      {/* {objs.map((obj, i) => {
        return <div key={i}>{obj.div}</div>
      })} */}
    </div>

    // <div className="game-container">
    //   <div className="belt-container">
    //     {imgs.map((img, i) => {
    //       return <div key={i}><img src={img} className={"img-obj"} style={{ left: Math.floor(Math.random() * 100) + 180 }} /></div>
    //     })}
    //   </div>
    // </div>
  )
}

export default Game