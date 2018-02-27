import React from "react";
import ReactDOM from "react-dom";

import { SimpleList } from "../src/index";

class Workbench extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const items = [
            {
                label: "label1",
                value: "value1"
            },
            {
                label: "label2",
                value: "value2"
            },
            {
                label: "label3",
                value: "value3"
            },
        ];
        return (
            <section className="test-area">
                <SimpleList list={items} label="Simple List" />
            </section>
        )
    }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));

