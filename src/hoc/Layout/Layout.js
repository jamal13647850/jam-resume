import React, {Component} from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

class Layout extends Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                {/*Main */}
                <div id="main">
                    {this.props.children}
                </div>
                {/*Footer*/}
                <Footer />
            </React.Fragment>
        );
    }
}

export default Layout;