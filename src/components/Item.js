import React from "react";
import "./Item.css";

class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            done: 0,
        };

        this.onClickDoneUndone = this.onClickDoneUndone.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
    }

    onClickDoneUndone = () => {
        if (this.state.done === 0) {
            document.getElementById(
                "task-" + this.props.time
            ).style.textDecoration = "line-through";
            document.getElementById(
                "button-done-" + this.props.time
            ).style.display = "none";
            document.getElementById(
                "button-undone-" + this.props.time
            ).style.display = "block";
            this.setState({
                done: 1,
            });
        } else {
            document.getElementById(
                "task-" + this.props.time
            ).style.textDecoration = "none";
            document.getElementById(
                "button-undone-" + this.props.time
            ).style.display = "none";
            document.getElementById(
                "button-done-" + this.props.time
            ).style.display = "block";
            this.setState({
                done: 0,
            });
        }
    };

    onClickDelete = () => {
        document.getElementById(
            "task-" + this.props.time
        ).style.textDecoration = "none";
        document.getElementById(
            "button-undone-" + this.props.time
        ).style.display = "none";
        document.getElementById(
            "button-done-" + this.props.time
        ).style.display = "block";

        this.props.onClickedDelete(this.props.id - 1);
    };

    render() {
        return (
            <div className="item">
                <p id={"task-" + this.props.time} className="task">
                    {this.props.id}. {this.props.task}
                </p>
                <div className="item-props">
                    <p>{this.props.time}</p>
                    <div className="item-control">
                        <button
                            id={"button-done-" + this.props.time}
                            className="done"
                            onClick={this.onClickDoneUndone}
                        >
                            Done
                        </button>
                        <button
                            id={"button-undone-" + this.props.time}
                            className="undone"
                            onClick={this.onClickDoneUndone}
                        >
                            Undone
                        </button>
                        <button className="delete" onClick={this.onClickDelete}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;
