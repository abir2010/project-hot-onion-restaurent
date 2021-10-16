import React from "react";

const Bitem = (props) => {
  const { id, name, price, des, img } = props.bitem;
  const { handleDetails } = props;
  return (
    <div onClick={() => handleDetails(`${id}`)}>
      <div className="flex flex-col items-center p-4">
        <img width="180px" src={img} alt="" />
        <h3 className="my-3 text-lg font-semibold">{name}</h3>
        <div className="space-y-1 leading-tight">
          <p>{des.slice(0, 21)}</p>
          <p className="font-bold">$ {price}</p>
          <button className="bg-red-500 rounded-full px-4 py-3 text-white text-sm  focus:ring">
            Details View
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bitem;
