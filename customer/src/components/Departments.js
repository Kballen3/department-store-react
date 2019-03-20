import React from 'react';
import {Header, Card, Button, } from 'semantic-ui-react';
import axios from 'axios';
import {Link, } from 'react-router-dom';

class Departments extends React.Component {
    state = {departments: [], };

    componentDidMount() {
        axios.get("/api/departments")
            .then( res => {
                this.setState({departments: res.data, })
            })
    }

    handleUpdate = (id) => {
        axios.put(`/api/departments/${id}`)
            .then( res => {
                const departments = this.state.departments.map( t=>{
                    if (t.id === id)
                        return res.data
                    return t;
                })
                this.setState({departments})
            })
    }

    handleDelete = (id) => {
        axios.delete(`/api/departments/${id}`)
            .then( res => {
                const {departments, } = this.state
                this.setState({departments: departments.filter(t => t.id !== id), })
            })
            
    }

    renderDepartments = () => {
        const {departments, } = this.state

        if (departments.length <= 0)
            return <h3>Out of Stock. Sorry!!!</h3>
        return departments.map( department => (
            <div>
                <Card>
                    <Card.Content>
                        <Card.Header>{ department.name }</Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                        <Button as={Link} to={`/departments/${department.id}`} color='blue'>
                            View
                        </Button>
                        <Button onClick={() => this.handleDelete(department.id)} color="red">
                            Delete
                        </Button>
                        <Button onClick={this.handleUpdate} color="pink">
                            Edit
                        </Button>
                    </Card.Content>
                </Card>
            </div>
        ))
    }

    render() {
        return (
            <div>
                <Header as='h1'>Departments</Header>
                <br />
                <Button as={Link} color='orange' to='/departments/new'>New Department</Button>
                <br />
                <br />
                <Card.Group>
                    { this.renderDepartments() }
                </Card.Group>
            </div>
        )
    }

   
}



export default Departments;