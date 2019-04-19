import React, { useState,useEffect } from 'react';
import '../css/modal.css';
// hooks
export default function ({onClose,vis,children}){
    const handleClose=()=>{
        if(vis){
            onClose()
        }
    }
    const visDisplay = vis ? 'block' :'none';
    return (
        <div className='modal-layer' style={{display:visDisplay}}>
                    <header className='modal-header'>
                    <span onClick={handleClose}>X</span>
                    </header>
                    {children}
        </div>
    )
}
// use class
 class Modal extends React.Component{
        constructor(props){
            super(props);
            this.state={
            };
            this.handleClose = this.handleClose.bind(this);
        }
        handleClose(){
            const onClose = this.props.onClose;
            if(this.props.vis){
                onClose()
            }
        }
        render(){
            const visDisplay = this.props.vis ? 'block' :'none';
            return(
                <div className='modal-layer' style={{display:visDisplay}}>
                    <header className='modal-header'>
                    <span onClick={this.handleClose}>X</span>
                    </header>
                    {this.props.children}
                </div>
            )
        }
}