import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";


class Gallery extends Component  {
    render() {
        const { images, name } = this.props;
        // const imgx = images.sprites.versions['generation-i'];
        console.log()
        return(
            <Carousel autoPlay>
                <div className="item">
                    <p className="my-slidecontent">{name}</p>
                    <img className="item-img" alt="" src={images.sprites.front_default} />
                    <p className="legend">Front default</p>
                </div>
                <div className="item">
                    <p className="my-slidecontent">{name}</p>
                    <img className="item-img" alt="" src={images.sprites.back_default} />
                    <p className="legend">Back default</p>
                </div>
                <div className="item">
                    <p className="my-slidecontent">{name}</p>
                    <img className="item-img" alt="" src={images.sprites.front_shiny} />
                    <p className="legend">Front shiny</p>
                </div>
                <div className="item">
                    <p className="my-slidecontent">{name}</p>
                    <img className="item-img" alt="" src={images.sprites.back_shiny} />
                    <p className="legend">Back shiny</p>
                </div>
                {/* <div className="item">
                    <img className="item-img" alt="" src={imgx['red-blue'].front_default} />
                    <p className="legend">{name}</p>
                </div>
                <div className="item">
                    <img className="item-img" alt="" src={imgx['red-blue'].back_shiny} />
                    <p className="legend">{name}</p>
                </div>
                <div className="item">
                    <img className="item-img" alt="" src={imgx['red-blue'].back_default} />
                    <p className="legend">{name}</p>
                </div> */}
            </Carousel>
        )
    }
}

export default Gallery;
