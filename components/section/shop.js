import React from "react";
import shopimg from "../../img/shop.png";
let styles = {
        "fontSize":"35px",
        "display": "flex",
        "width":"100%",
        "border":"1px solid #ccc"
    }
let btnstyle={
        "fontSize": "35px",
}
class Shop extends React.Component {
    
    render() {
        return (<div style={styles}>
        <div style={{width:"30%",display:"flex","justifyContent":"center","alignItems":"center"}}>
        <img src={shopimg}  style={{width:"100%"}}/>
        </div>
        <div style={{width:"70%"}}>
            <h1 style={{margin:"15px 0","fontWeight":"normal"}}>一品缘分过桥米线</h1>
            <div>
            <span>评分</span><span style={{color:"red"}}>4.7</span>
            <span>月售</span><span>556</span>
            </div>
            <p style={{padding:0,margin:"20px 0",background:"pink",display:"inline-block"}}>
              “挺快的，货品完好”  
            </p>
            <div>
                <button style={btnstyle}>25减11</button>
                <button style={btnstyle}>46减16 </button>
                <button style={btnstyle}>65减20</button>
                <button style={btnstyle}>25减11</button>
            </div>
        </div>
        </div>);
    }

}
export default Shop;