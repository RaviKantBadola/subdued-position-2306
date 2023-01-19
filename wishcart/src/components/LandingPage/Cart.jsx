import {Box} from "@chakra-ui/react"
 const navData = [
  {url:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47e5c31ef7dcce1e.png?q=100",text:"Top Offers"},
  {url:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5f8bd5669e19e724.png?q=100",text:"Mobiles & Tablets"},
  {url:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/361d53b8725c2d2d.png?q=100",text:"Electronics"},
  {url:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/904f3c8e7101408b.png?q=100",text:"TVs & Appliances"},
  {url:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/7f7355480c6adc16.png?q=100",text:"Fashion"},
  {url:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f97d6138516056bc.png?q=100",text:"Beauty"},
  {url:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/6728ed3cf145562c.png?q=100",text:"Home & Furniture"},
  {url:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/007910082ae6355b.png?q=100",text:"Flights"},
  {url:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/46376ceed3448aff.png?q=100",text:"Grocery"}
]
const Cart = () => {
  return (
    <Box style={{display:"flex", justifyContent:"space-evenly",padding:"12px 8px",textAlign:"center",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",width:"100%"}}>
      {navData.map(data=>(
     <Box key={data.text}  >
      <img src={data.url} alt="nav" style={{width:64,marginLeft:"auto",marginRight:"auto"}}/>
      <p style={{fontWeight:600,fontSize:"14px",}}>{data.text}</p>
       </Box>
      ))
      }
    </Box>
  )
}

export {Cart}
