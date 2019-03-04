import React from "react";
import ReactDOM from "react-dom";
import "../../icon/iconfont.css"
import '../../css/footer.css'

class Footer extends React.Component{
    render(){
        return (
        <footer>
            <div>
                <span className="iconfont icon-eliaomo icon"></span>
                <span>外卖</span>
            </div>
            <div>
                <span className="iconfont icon-richangshenghuo-chaoshi icon"></span>
                <span>超市</span>
            </div>
            <div>
                <span className="iconfont icon-dingdan2 icon"></span>
                <span>订单</span>
            </div>
            <div>
                <span className="iconfont icon-wo icon"></span>
                <span>我的</span>
            </div>
        </footer>
        )
    }
}
export default Footer; 