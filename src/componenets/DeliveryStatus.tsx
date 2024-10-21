import React, { useState } from 'react';

// Define props for DeliveryStatus
interface DeliveryStatusProps {
  isTruckLeft: boolean;
  truckcount: number;
  onTruckDeparture: (itemCount: number) => void; 
}

const DeliveryStatus: React.FC<DeliveryStatusProps> = ({ isTruckLeft, truckcount, onTruckDeparture }) => {
  const [inputValue, setInputValue] = useState<number>(0); 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(event.target.value)); 
  };

  const handleDepartureClick = () => {
    onTruckDeparture(inputValue); 
    setInputValue(0); 
  };
  return (
    <div className="delivery-status">
      <h2>Delivery Status</h2>
      {/* <p>{isTruckLeft ? `${truckcount} The truck has left the warehouse.` : " is still in the warehouse."}</p> */}
      <p>${truckcount} The truck has left the warehouse. </p>
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter item count" />
      {/* Button to dispatch the truck */}
      {!isTruckLeft &&<button onClick={handleDepartureClick}>Dispatch Truck</button>}
    </div>
  );
};

export default DeliveryStatus;
