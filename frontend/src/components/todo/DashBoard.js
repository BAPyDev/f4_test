import React, {Component, Fragment} from 'react';
import Form from "./Form";
import List from "./List";

class DashBoard extends Component {
    render() {
        return (
            <Fragment>
                 <List />
                 <Form />
            </Fragment>
        );
    }
}

export default DashBoard;