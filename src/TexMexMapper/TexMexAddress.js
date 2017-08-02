import React from 'react';
import TEX_DATA from './TEX_DATA';

const address = (props) => {
  return(
    <div>
      <div>
        <h1> { props.title } </h1>
          <div>
            <h3> { props.address.street }</h3>
            <h3>{ props.address.suite }</h3>
            <h3>{ props.address.city }, { props.address.state }  { props.address.zip }</h3>
            <h5>{ props.phone }</h5>
          </div>
      </div>
    </div>
  )
}

const TexMexAddress = (props) => {

  const texMexAddressItems = TEX_DATA.address.map(function(address, index){
    return(
      <div className="tex-mex-address">
        <h3> { address.street } </h3>
        <h3> { address.suite } </h3>
        <h3> { address.city }, { address.state }  {address.zip} </h3>
      </div>
    )
  })
}

export default TexMexAddress;
