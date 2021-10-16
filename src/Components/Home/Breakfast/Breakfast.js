import React, { useEffect, useState } from "react";
import Bitem from "../Bitem/Bitem";

const Breakfast = () => {
  const [bitems, setBitems] = useState([]);
  const [detailpd, setDetailpd] = useState({});
  const handleDetails = (id) => {
    console.log(id);
    let found = bitems.find((pd) => pd.id === id);
    console.log(found);
    // setDetailpd(found);
  };
  useEffect(() => {
    fetch("./items.json")
      .then((res) => res.json())
      .then((data) => setBitems(data.breakfast));
  }, []);
  return (
    <div>
      <section className="m-4 md:m-8 dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bitems.map((bitem) => (
            <Bitem
              key={bitem.id}
              handleDetails={handleDetails}
              bitem={bitem}
            ></Bitem>
          ))}
        </div>
      </section>
      {/* <section>
        {detailpd.name}
      </section> */}
    </div>
  );
};

export default Breakfast;
