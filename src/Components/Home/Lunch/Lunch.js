import React, { useEffect, useState } from "react";
import Litem from "../Litem/Litem";

const Lunch = () => {
  const [litems, setLitems] = useState([]);
  useEffect(() => {
    fetch("./items.json")
      .then((res) => res.json())
      .then((data) => setLitems(data.lunch));
  }, []);
  return (
    <div>
      <section className="m-4 md:m-8 dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {
            litems.map(litem => <Litem key={litem.id} litem={litem}></Litem>)
          }
        </div>
      </section>
    </div>
  );
};

export default Lunch;
