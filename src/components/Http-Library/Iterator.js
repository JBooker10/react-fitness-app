import React from 'react';

export let Options = ({i, from, to}) => {
   const reactArray = []
   for(i = from; i <= to; i++){
   reactArray.push(React.createElement('option', {"key": i}, i))
  }
  return reactArray
 }

export let OptionsAdv = ({i, from, to}) => {
  const reactArray = []
  for(i = from; i <= to; i++){
    if(i % 5 === 0){
  reactArray.push(React.createElement('option', {"key": i}, i))
  }
 }
 return reactArray
}
