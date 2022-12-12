function List() {
    const details=[
        {
        id:1,
        name:'Vimal',
        roll:'23'
    },
    {
        id:2,
        name:'Cathy',
        roll:'24'
    },
    {
        id:3,
        name:'Manoj',
        roll:'25'
    },
];
    return(
   <div>
   {details.map(data =>
        (
        <div className="test" key={data.id}>
        <p style={{background:'red'}}> My name is {data.name}</p>
        <p> my roll no is {data.roll}</p>
        </div>))
  } 
   </div>
  )
}
  export default List;