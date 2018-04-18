import * as React from 'react';
// import {BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavBar from "../../lib/menu/NavBar";

var {generateNumber} = require("../../lib/lib.js")
export interface HeaderState {
    menu: any
}
class Header extends React.Component<{}, HeaderState> {
    constructor(props:any){
        super(props)
        this.state = {
            menu: [
                {
                    label: "Home",
                    link: "/"
                },
                {
                    label: "Products",
                    link: "/products",
                    subMenu: [
                        {
                            label: "Mobile",
                            link: "/",
                            subMenu: [
                                {
                                    label: "Samsung",
                                    link: "/",
                                    subMenu: [
                                        {
                                            label: "Galaxy S",
                                            link: "/"
                                        },
                                        {
                                            label: "Galaxy Note",
                                            link: "/"
                                        },
                                        {
                                            label: "J",
                                            link: "/"
                                        },
                                    ]
                                },
                                {
                                    label: "Nokia",
                                    link: "/"
                                },
                                {
                                    label: "Apple",
                                    link: "/"
                                },
                            ]

                        },
                        {
                            label: "TV",
                            link: "/",
                            subMenu: [
                                {
                                    label: "Samsung",
                                    link: "/"
                                },
                                {
                                    label: "APPLE",
                                    link: "/"
                                },
                                {
                                    label: "SONY",
                                    link: "/"
                                },
                            ]
                        },
                        {
                            label: "Laptop",
                            link: "/",
                            subMenu: [
                                {
                                    label: "Samsung",
                                    link: "/"
                                },
                                {
                                    label: "APPLE",
                                    link: "/"
                                },
                                {
                                    label: "Dell",
                                    link: "/"
                                },
                                {
                                    label: "ASUS",
                                    link: "/"
                                },
                                {
                                    label: "HP",
                                    link: "/",
                                    subMenu: [
                                        {
                                            label: "Samsung",
                                            link: "/",
                                            subMenu: [
                                                {
                                                    label: "Samsung",
                                                    link: "/",
                                                    subMenu: [
                                                        {
                                                            label: "Samsung",
                                                            link: "/"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                            ]
                        },
                    ]
                },
                {
                    label: "Video",
                    link: "./about"
                },
                {
                    label: "News",
                    link: "./about"
                },
                {
                    label: "About",
                    link: "./about"
                },
                {
                    label: "Contact",
                    link: "./contact"
                }
            ]
        }
    }
    public render() {
        return (
            <div className="App">
                <div className="col-12 primary-menu">
                    <div className="container">
                        <div className="row center-flex">
                            <div className="col-2">
                                <a href="">
                                    <i className="sicon sicon-home white home-icon"></i>
                                </a>
                            </div>
                            <div className="col-2"></div>
                            <div className="col-4">
                                <div className="search">
                                    <input type="text" placeholder="Tìm kiếm sản phẩm"/>
                                    <i className="sicon sicon-search icon-search"></i>
                                </div>
                            </div>
                            <div className="col-2"></div>
                            <div className="col-2">
                                <a href="">
                                    <i className="sicon sicon-shopping-cart white home-icon"> Cart</i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 NavBar">
                    <div className="container">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">
                                <NavBar id="" key={generateNumber()} menu={this.state.menu}/>
                            </div>
                            <div className="col-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;