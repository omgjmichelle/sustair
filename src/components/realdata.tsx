/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import {ref, onValue} from "firebase/database";
import {database} from "@/app/firebase/firebaseConfig";
import { useState,useEffect } from "react";
import { snapshot } from "node:test";



function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dbRef = ref(database, 'UsersData/aw17J6t15kP88RrcG6XirxPH63Z2');
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      setData(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>My Data from Firebase</h1>
      {data ? ( // Check if data is loaded
        <ul>
          {Object.keys(data).map((key) => ( // Iterate through data keys
            <li key={key}>
              <strong>{key}:</strong> {data[key]} 
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p> // Display loading message
      )}
    </div>
  );
}

export default MyComponent;