import React, { Component } from 'react';
import dataGlasses from '../Data/dataGlasses.json';

export default class BaiTapThuKinh extends Component {
    state = {
        glassesCurrent: {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    renderGlassesList = () => {
        return dataGlasses.map((glasses, index) => {
            return <img onClick={() => { this.changeGlasses(glasses) }} className='ml-2 p-2 border border-width-1' style={{width: '110px', cursor: 'pointer'}} key={index} src={glasses.url} />
        })
    }

    changeGlasses = (newGlasses) => {
        this.setState({
            glassesCurrent: newGlasses
        })
    }

    render() {
        const styleBg = {
            backgroundImage: 'url(./glassesImage/background.jpg)',
            // minHeight: '1200px',
            height: '100vh',
            backgroundSize: "100%",
            objectFit: 'cover',
        };
        const styleBgColor = {
            backgroundColor: 'rgba(0, 0, 0, .3)',
            // minHeight: '1200px',
            height: '100vh',
        };
        const styleBgTitle = {
            backgroundColor: 'rgba(0, 0, 0, .8)',
        };
        const styleModel = {
            width: '250px',
        };
        const styleGlasses = {
            width: '150px',
            top: '75px',
            right: '118px',
            opacity: '.7'
        };
        const infoGlasses =  {
            width: '250px',
            top: '200px',
            left: '318px',
            paddingLeft: '15px',
            backgroundColor: 'rgba(255, 127, 0, .5)',
            textAlign: 'left',
            height: '105px',
        }

        return (
            <div style={styleBg}>
                <div style={styleBgColor}>
                    <h3 style={styleBgTitle} className="text-center text-light p-5">TRY GLASSES APP ONLINE</h3>
                    <div className="container">
                        <div className="row mt-5 text-center">
                            <div className="col-6">
                                <div className='position-relative'>
                                    <img style={styleModel} className='position-absolute' src="./glassesImage/model.jpg" alt="model.jpg" />
                                    <img style={styleGlasses} className='position-absolute' src={this.state.glassesCurrent.url} alt="" />
                                    <div style={infoGlasses} className='position-relative'>
                                        <span style={{color: '#AB82FF', fontSize: '17px'}} className="font-weight-bold">{this.state.glassesCurrent.name}</span><br />
                                        <span style={{fontSize: '14px', fontWeight: '400'}}>{this.state.glassesCurrent.desc}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <img style={styleModel} src="./glassesImage/model.jpg" alt="model.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className='bg-light container text-center mt-5 d-flex justify-content-center p-5'>
                        {this.renderGlassesList()}
                    </div>
                </div>
            </div>
        );
    }
}