import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';


const styles = (theme) => ({
    container : {
        width : '60vw',
        height : '1.4rem',

    },

    progressBarContainer : {
        width : '60vw',
        height : '.4rem',
        borderRadius : '5rem',
        backgroundColor : '#ccc',
        marginTop : '0.2rem',
        position : 'absolute'
    },

    progress : {
        width : '0vw',
        height : '0.8rem',
        borderRadius : '5rem',
        backgroundImage : 'linear-gradient(to right,rgba(30,144,255,0.7), rgba(0,255,0,1))',
        zIndex : '1',
        position : 'absolute',
    }
});


class ProgressBar extends Component {
    
    
    render() {
        const {classes} = this.props;
        let width = this.props.progress * 60;
        return (
            <div className={classes.container}>
                <div className = {classes.progress} style={{width : `${width}vw`}}/>
                <div className = {classes.progressBarContainer}/>
            </div>
        );
    }
}

export default withStyles(styles)(ProgressBar);
