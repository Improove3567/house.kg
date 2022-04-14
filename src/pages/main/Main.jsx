import Card from "../../componets/card/Card.jsx"

export const Main = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <main className='container mt-5'>
      <h2 className='text-center'>Последние объявления</h2>

      <div className='mt-5 row'>
        {
          arr.map((item) => <Card id={item} />)
        }
      </div>

    </main>
  )
}