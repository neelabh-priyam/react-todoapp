import React from "react";
import Item from "./components/Item";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super();

        this.state = {
            inputText: "",
            tasks: ["Enter your work above and it will be shown here."],
            times: [
                new Date().getHours().toString() +
                    ":" +
                    new Date().getMinutes().toString() +
                    ":" +
                    new Date().getSeconds().toString(),
            ],
        };

        this.onChangeInput = this.onChangeInput.bind(this);
        this.onClickAdd = this.onClickAdd.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
    }

    onChangeInput = (event) => {
        this.setState({
            inputText: event.target.value,
        });
    };

    onClickAdd = () => {
        if (this.state.inputText === "") {
            document.getElementById("display-error").style.display = "block";
        } else {
            document.getElementById("display-error").style.display = "none";

            this.setState({
                inputText: "",
                tasks: [...this.state.tasks, this.state.inputText],
                times: [
                    ...this.state.times,
                    new Date().getHours().toString() +
                        ":" +
                        new Date().getMinutes().toString() +
                        ":" +
                        new Date().getSeconds().toString(),
                ],
            });
        }
    };

    onClickDelete = (id) => {
        this.setState({
            tasks: this.state.tasks.filter((value, index) => {
                return index.toString() !== id.toString();
            }),
            times: this.state.times.filter((value, index) => {
                return index.toString() !== id.toString();
            }),
        });
    };

    render() {
        return (
            <>
                <div className="credits">
                    <p>This is created by</p>
                    <a
                        href="https://github.com/neelabh-priyam"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Neelabh Priyam Jha
                    </a>
                    <p>
                        using
                        <a
                            href="https://reactjs.org/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            React.js
                        </a>
                    </p>
                </div>
                <div className="app">
                    <h1>ToDo App</h1>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="enter your task..."
                            value={this.state.inputText}
                            onChange={this.onChangeInput}
                        />
                        <button onClick={this.onClickAdd}>Add</button>
                    </div>
                    <p id="display-error" className="error">
                        Please fill the above box first.
                    </p>
                    <div className="tasks-list">
                        {this.state.tasks.map((task, index) => {
                            return (
                                <Item
                                    key={index}
                                    id={index + 1}
                                    task={task}
                                    time={this.state.times[index]}
                                    onClickedDelete={this.onClickDelete}
                                />
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default App;
