import * as React from 'react';
export interface NavBarLinkProps {
    url:string,
    text:string
}
class NavBarLink extends React.Component<NavBarLinkProps,{}> {
    constructor(props:any){
        super(props)
    }
    public render() {
        return (
            <a href={this.props.url}>{this.props.text}</a>
        );
    }
}

export default NavBarLink;