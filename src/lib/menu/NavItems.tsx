import * as React from 'react';
import NavBarLink from "./NavBarLink";
import NavBar from "./NavBar";

var {generateNumber} = require("../../lib/lib.js")
export interface NavItemsProps {
    text: string,
    url: string,
    subMenu: any,
    index:number
}
class NavItems extends React.Component<NavItemsProps, {}> {
    constructor(props:any){
        super(props)
    }
    public generateLink = ()=>{
        return <NavBarLink key={generateNumber()} text={this.props.text} url={this.props.url}/>
    }
    public generateSubMenu = ()=> {
        return <NavBar id="sub-menu" key={generateNumber()} menu={this.props.subMenu}/>
    }
    public generateContent = ()=>{
        let content = [this.generateLink()]
        if(this.props.subMenu){
            content.push(this.generateSubMenu())
        }
        return content
    }
    public render() {
        return (
            <li key={this.props.index}>{this.generateContent()}</li>
        );
    }
}

export default NavItems;