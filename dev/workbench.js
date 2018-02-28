import React from "react";
import ReactDOM from "react-dom";
import "../src/style/_index";

import { ExpandableBox } from "../src/index";

class Workbench extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render() {
        const { show, list, openAction, progress, clickAction, date } = this.props;

		return (
			<section className="test-area">
                <div style={{ width: "300px", height: "300px" }} >
                    <ExpandableBox className="new" title="Título" isOpen={this.state.isOpen} clickAction={() => this.setState({ isOpen: !this.state.isOpen })} >
                      <center> "Conteúdo" </center>
                    </ExpandableBox>
                </div>
			</section>
		
        );
    }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));

