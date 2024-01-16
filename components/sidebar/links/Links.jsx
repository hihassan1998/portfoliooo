


const Links = () => {

const items =[
  "Startsida" ,
  "Services" ,
  "Portfolio" ,
  "Kontakt" ,
  "Om" ,
]




  return (
    <div className="links">{items.map(item=>(
      <a href={"#${item}"} key ={item}> {item} </a>

    ))}
    </div>
  )
}

export default Links
