

const Header2 = () => {
    const list=[
        {
            name:"Bangalore"
        },
        {
            name:"Delhi"
        },
        {
            name:"Bombay"
        },
        {
            name:"Hyderabad"
        },
        {
            name:"Chennai"
        },
        {
            name:"Pune"
        },
        {
            name:"Calcutta"
        },
        {
            name:"Jaipur"
        },
        {
            name:"Noida"
        },
        {
            name:"Gurgaon"
        },
    ]
  return (
    <div className="flex px-10 py-3 bg-gray-200 justify-between">
      {list.map((e)=>{
        return(
            <span key={e.name}>{e.name}</span>
        )
      })}
    </div>
  )
}

export default Header2
