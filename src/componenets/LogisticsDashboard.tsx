import React, { useState } from 'react';

import '../App.css';
import WarehouseInventory from './WarehouseInventory';
import DeliveryStatus from './DeliveryStatus';

const LogisticsDashboard: React.FC = () => {
  const [warehouseItems, setWarehouseItems] = useState<number>(100);

  const [isTruckLeft, setIsTruckLeft] = useState<boolean>(false);
  const [truckcount, settruckcount] = useState<number>(0);


  const handleTruckDeparture = (itemcount: number) => {
    if(warehouseItems <=5){
      setIsTruckLeft(true)
    }
    if (warehouseItems>5 && warehouseItems >= itemcount && itemcount > 0) {
      setWarehouseItems(warehouseItems - itemcount);
      settruckcount(truckcount + 1);
      //setIsTruckLeft(true); // Mark truck as departed
    }
     else {
      alert('Not enough items in the warehouse or invalid count.'); // Error handling
    }
    

   
  };

  return (
    <div className="dashboard">
      <h1>Logistics Dashboard</h1>
      <div className="dashboard-content">
        <WarehouseInventory itemCount={warehouseItems} />
        <DeliveryStatus isTruckLeft={isTruckLeft} truckcount={truckcount} onTruckDeparture={handleTruckDeparture} />
      
      </div>
    </div>
  );
};

export default LogisticsDashboard;
