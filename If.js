import  React from 'react';
export default function(props){
    const condition=props.condition||false;
    const positive=props.then||null;
    const negative=props.Reactelse||null;
    return condition?positive:negative
}