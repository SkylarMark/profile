import React, { useState } from 'react';

import { makeStyles, Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: theme.spacing(10),
        [theme.breakpoints.down('md')]:{
            padding: theme.spacing(0)
        }
    },
    white: {
        color: '#000'
    },
    bg: {
        color: "#000",
    },
    heading: {
        marginRight: theme.spacing(5),
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        color: theme.palette.text.primary,
        [theme.breakpoints.down('md')]:{
            marginRight: theme.spacing(2)
        }
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    year: {
        marginRight: theme.spacing(20),
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.hint,
        [theme.breakpoints.down('sm')]:{
            marginRight: theme.spacing(2)
        }
    },
}));

export default function ProjectExpansionPanel() {

    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
      <div className={classes.root}>
        <ExpansionPanelArea 
            name="1" 
            classes={classes} 
            expanded={expanded} 
            handleChange={handleChange} 
            title="A simple CMS for Simhastha" 
            technologyUsed="Joomla 3.0" 
            year="2016"
        />
        <ExpansionPanelArea 
            name="2" 
            classes={classes} 
            expanded={expanded} 
            handleChange={handleChange} 
            title="Automatic Lighting with PIR motion Sensor" 
            technologyUsed="Arduino UNO" 
            year="2017" 
        />
        <ExpansionPanelArea 
            name="3"
            classes={classes} 
            expanded={expanded} 
            handleChange={handleChange} 
            title="Sangini - Android App, Web Api, Admin Interface" 
            technologyUsed="Flutter (Android), Node Js, Code Igniter (PhP Framework)" 
            year="2020"
        />
        <ExpansionPanelArea 
            name="4"
            classes={classes} 
            expanded={expanded} 
            handleChange={handleChange} 
            title="Sangini - Android App, Web Api, Admin Interface" 
            technologyUsed="Flutter (Android), Node Js, Code Igniter (PhP Framework)" 
            year="2020"
        />
        <ExpansionPanelArea 
            name="5"
            classes={classes} 
            expanded={expanded} 
            handleChange={handleChange} 
            title="Sangini - Android App, Web Api, Admin Interface" 
            technologyUsed="Flutter (Android), Node Js, Code Igniter (PhP Framework)" 
            year="2020"
        />
        <ExpansionPanelArea 
            name="6"
            classes={classes} 
            expanded={expanded} 
            handleChange={handleChange} 
            title="Sangini - Android App, Web Api, Admin Interface" 
            technologyUsed="Flutter (Android), Node Js, Code Igniter (PhP Framework)" 
            year="2020"
        />
      </div>
    );
}

function ExpansionPanelArea({name, classes, expanded, handleChange, title, technologyUsed, year,...Data}) {
    return (
        <ExpansionPanel TransitionProps={{ unmountOnExit: true }} expanded={expanded === name} onChange={handleChange(name)}>
        <ExpansionPanelSummary
          className={classes.bg}
          expandIcon={<ExpandMoreIcon className={classes.white} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>{title}</Typography>
          <Typography className={classes.year}>{year}</Typography>
          <Typography className={classes.secondaryHeading}>{technologyUsed}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <ExpansionPanelInternal {...Data} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
}

function ExpansionPanelInternal() {
    return (
        <Typography variant="h1" > HELLO There </Typography>
        );
}