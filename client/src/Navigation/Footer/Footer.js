import React, { Component } from "react";
import client from './../../contentful';
import FooterContent from './FooterContent';


class FooterPage extends Component {
    state = {
        footer: []
    };

    componentDidMount() {
        this.fetchFooter().then(this.setFooter);
    }

    fetchFooter = (() => {
        return client.getEntries({ content_type: 'footer' });
    });

    setFooter = response => {
        this.setState({
            footer: response.items
        });
    };
    render() {
        console.log(this.state.footer);
        let footerContent = null;
        if (this.state.footer.length > 0) {
            footerContent = <FooterContent id="1" { ...this.state.footer[0].fields }/>;
        }

        return (
            <div>{footerContent} </div>
        );
    }
}

export default FooterPage;