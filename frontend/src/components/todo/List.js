import React, {Component, Fragment} from 'react';
import { connect } from "react-redux";
import { PropTypes } from 'prop-types';
import { getTodos, toggleTodo, deleteTodo } from "../../actions/todos";

class List extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        getTodos: PropTypes.func.isRequired,
        toggleTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getTodos()
    }

    render() {
        return (
            <Fragment>
                <h2>TODO list</h2>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <td>title</td>
                            <td>description</td>
                            <td>done</td>
                            <td></td>
                        </tr>

                    </thead>
                    <tbody>
                    {this.props.todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <td><input onChange={this.props.toggleTodo.bind(this, todo)}
                                       type="checkbox" defaultChecked={todo.done}/></td>
                            <td><button
                                onClick={this.props.deleteTodo.bind(this, todo.id)}
                                className='btn btn-danger btn-sm'>Delete</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}


const mapStateToProps = (state) => ({
    todos: state.todos.todos
});

export default connect(mapStateToProps, { getTodos, deleteTodo, toggleTodo })(List);