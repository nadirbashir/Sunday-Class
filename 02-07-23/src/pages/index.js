import Button from "@/components/Button"
import Item from "@/components/Item"
import { List } from "@/components/List"
import { useState } from 'react'

const dummyData = [
  { id: 1, description: 'item 1' },
  { id: 2, description: 'item 2' },
  { id: 3, description: 'item 3' },
  { id: 4, description: 'item 4' },
]

function Home() {
  const [data, setData] = useState(dummyData);

  const handleAddItem = () => {
    setData([...data, { id: new Date().getTime(), description: 'New Item' }]);
  }

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id)
    setData(updatedData)
  }

  return (
    <>
      <div> Hello World!</div>
      <List handleDelete={handleDelete} data={data} />
      <Button onAdd={handleAddItem} text={'click'} />
    </>
  )
}
export default Home