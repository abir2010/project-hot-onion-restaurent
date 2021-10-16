import React from 'react';

const Litem = (props) => {
    const {name,price,des,img} = props.litem;
    return (
        <div>
            <div className="flex flex-col items-center p-4">
        <img width="180px" src={img} alt="" />
        <h3 className="my-3 text-lg font-semibold">{name}</h3>
        <div className="space-y-1 leading-tight">
          <p>{des.slice(0,21)}</p>
          <p>{price}</p>
        </div>
      </div>
        </div>
    );
};

export default Litem;