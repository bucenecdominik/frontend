import React from 'react'

const Main = () => {
  return (
    <div className='Main'>
      <div className="main-wrapper">
        <div className="main-text">
            <h2 className='main-text-header'>Heading</h2>
            <p className='main-text-paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente dicta hic maiores, quis iste distinctio magnam, esse molestias natus voluptatem unde alias eligendi, saepe aut odio nisi accusantium! Eos, cupiditate!</p>
        </div>
        <div className="main-form">
            <form>
                <input type="text" placeholder='data'></input>
                <input type="text" placeholder='data'></input>
                <input type="text" placeholder='data'></input>
                <input type="text" placeholder='data'></input>
                <input id="big-input" type="text" placeholder='data'></input>
                <input type="text" placeholder='data'></input>
                <button className='btn'>Button</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Main
