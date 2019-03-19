import React from 'react';
import {Link, } from 'react-router-dom';
import {Header, Button, } from 'semantic-ui-react';

const NoMatch = () => (
    <div style={styles.container}>
        <Header as='h1'>Sorry!!! This is the Wrong Page</Header>
        <Header as='h4'>Try Again by clicking home button</Header>
        <br />
        <br />
        <br />
        <br />
        <Link to="/">
            <Button>Home</Button>
        </Link>
    </div>
)

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

    },
    header: {
        fontSize: "75px"
    }
}

export default NoMatch