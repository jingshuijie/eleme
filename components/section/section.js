import React from 'react';

import banner from '../../img/banner.png';
import type from "../../img/type.png";
import movie from "../../img/movie.png";

class Section extends React.Component{
	
	render(){
		return(
			<div>
                <section>
                <div className="banner">
                    <div>
                      <img src={banner}/ >
                    </div>
                </div>
               
                <div className="sort">
                <figure>
                    <img src={type}/>
                    <figcaption>蜂鸟配送</figcaption>
                </figure>
                <figure>
                    <img src={type}/>
                    <figcaption>蜂鸟配送</figcaption>
                </figure>
                <figure>
                    <img src={type}/>
                    <figcaption>蜂鸟配送</figcaption>
                </figure>
                <figure>
                    <img src={type}/>
                    <figcaption>蜂鸟配送</figcaption>
                </figure>
                <figure>
                    <img src={type}/>
                    <figcaption>蜂鸟配送</figcaption>
                </figure>
                <figure>
                    <img src={type}/>
                    <figcaption>蜂鸟配送</figcaption>
                </figure>
                <figure>
                    <img src={type}/>
                    <figcaption>蜂鸟配送</figcaption>
                </figure>
                <figure>
                    <img src={type}/>
                    <figcaption>蜂鸟配送</figcaption>
                </figure>
                <figure>
                    <img src={type}/>
                    <figcaption>蜂鸟配送</figcaption>
                </figure>
                <figure>
                    <img src={type}/>
                    <figcaption>蜂鸟配送</figcaption>
                </figure>
                </div>
                <div className="yule-box">
                    <div className="yule">
                        <div className="yule-left">
                            <b>电影</b>
                            <span>抢10元</span>
                        </div> 
                        <div className="yule-reght">
                            <img src={movie}/>
                        </div>
                    </div>
                    <div className="yule">
                        <div className="yule-left">
                            <b>电影</b>
                            <span>抢10元</span>
                        </div> 
                        <div className="yule-reght">
                            <img src={movie}/>
                        </div>
                    </div>
                    <div className="yule">
                        <div className="yule-left">
                            <b>电影</b>
                            <span>抢10元</span>
                        </div> 
                        <div className="yule-reght">
                            <img src={movie}/>
                        </div>
                    </div>
                </div>
                
                </section>      
			</div>
		)
	}
}

export default Section;

