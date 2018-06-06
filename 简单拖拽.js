/**
 * Created by cht on 2018/4/11.
 */
import React, { Component } from 'react';
export class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            left:0,
            top:0
        };
        this.moving=false;
        this.startX=null,this.startY=null;
        this.left=null,this.top=null;
        document.onmouseup=(e)=>this.onMouseUp(e);
        document.onmousemove=(e)=>this.onMouseMove(e);
        this.mouseDown=this.mouseDown.bind(this)
    }
    mouseDown(e){
        var e=e||window.event;
        this.startX=e.clientX;
        this.startY=e.clientY;
        this.moving=true;

 
    }
    onMouseMove(e){
        var e=e||window.event;
        if (e.preventDefault) {
            e.preventDefault();
        }
        this.moving&&this.move(e)
            
    }
    move(e){
        if(this.startX&&this.startY){
            var dx=e.clientX-this.startX;
            var dy=e.clientY-this.startY;
            //console.log(dx,dy);

            this.setState({
                left:this.left+dx,
                top:this.top+dy
            });
        }
        
    }
    onMouseUp(e){
        var e=e||window.event;
        this.moving=false;
        this.left=this.state.left;
        this.top=this.state.top;
    }
    render(){
        const {left,top}=this.state;
        return(
            <div style={{"height":"300px","position":"relative","border":"1px solid #ccc"}}>
                
                <div  onMouseDown={this.mouseDown}
                    style={{ width: 100, height: 100,"position":"absolute", backgroundColor: '#3c3c3c',left:`${left}px`,top:`${top}px`}}
                  >
                    drag Block
        
                 </div>
            </div>
        )
    }
    
}