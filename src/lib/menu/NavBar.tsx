import * as React from 'react';
import NavItems from "./NavItems";
var {generateNumber} = require("../../lib/lib.js")
export interface NavBarProps {
    menu: any,
    id: any
}
class NavBar extends React.Component<NavBarProps, {}> {
    constructor(props:any){
        super(props)
    }
    public generateItem = (item:any, index:number)=>{
        return <NavItems key={generateNumber()} index={index} text={item.label} url={item.link} subMenu={item.subMenu}/>
    }
    public render() {
        return (
            <ul className="menu" id={this.props.id}>
                {this.props.menu.map((e:any,i:number)=>{
                    return this.generateItem(e,i)
                })}
            </ul>
        );
    }
}

export default NavBar;