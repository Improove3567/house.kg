import Card from "../../componets/card/Card.jsx"
import { useEffect, useState } from "react";

export const Main = () => {
  const [houses, setHouses] = useState([]);


  useEffect(() => {
    fetch('https://625eaae63b039517f1fa093e.mockapi.io/house')
    .then((response) =>{
      return response.json()
    })
    .then((data) =>{
      setHouses(data)
    })
  }, [])


  return (
    <main className='container mt-5'>
      <h2 className='text-center'>Последние объявления</h2>

      <div className='mt-5 row'>
        {
          houses.map((item) => <Card id={item.id}
          title={item.title}
          descripption={item.description}
          image={item.image}
          price={item.price}
          />)

          
        }

       
      </div>

    </main>
  )
}