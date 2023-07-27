

export default function Card({item}) {
    const {name,age,rating,feedback} = item;
  return (
    <div className="border p-4 text-lg">
        <p className="font-bold">{name}</p>
        <p>{feedback}</p>
        <div className="flex justify-between text-gray-400">
        <p>Age:{age}</p>
        <p>Rating:{rating}</p>    
        </div>
    </div>
  )
}
