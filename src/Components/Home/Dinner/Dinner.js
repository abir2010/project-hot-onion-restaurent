import React, { useEffect, useState } from 'react';
import Ditem from '../Ditem/Ditem';

const Dinner = () => {
  const [ditems, setDitems] = useState([]);
  useEffect(() => {
    fetch("./items.json")
      .then((res) => res.json())
      .then((data) => setDitems(data.dinner));
  }, []);
  return (
    <div>
      <section className="m-4 md:m-8 dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {
            ditems.map(ditem => <Ditem key={ditem.id} ditem={ditem}></Ditem>)
          }
        </div>
      </section>
    </div>
  )
};

export default Dinner;