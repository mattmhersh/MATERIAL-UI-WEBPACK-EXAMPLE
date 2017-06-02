/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import { Button, Alert, Spinner, ButtonGroup, Glyph } from 'elemental';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <Dialog
            open={this.state.open}
            title="Super Secret Password"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            1-2-3-4-5
          </Dialog>
          <h1>Material-UI</h1>
          <h2>example project</h2>
          <RaisedButton
            label="Super Secret Password"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />
          <MyAwesomeReactComponent />

          <ButtonGroup>
            <Button type="default">Left</Button>
            <Button type="default">Middle</Button>
            <Button type="default">Right</Button>
          </ButtonGroup>

          <br />
          <br />
          <Spinner size="md" />
          <Spinner size="md" type="primary" />
          <Spinner size="md" type="inverted" />

          <br />
          <br />
          <Button><Spinner /></Button>
<Button disabled><Spinner type="primary" />Saving</Button>
<Button type="primary"><Spinner type="inverted" />Submitting</Button>

          <br />
          <br />
          <Glyph icon="thumbsup" />
          <Button type="primary"><Glyph icon="beaker" /></Button>
          <Button type="danger"><Glyph icon="flame" /></Button>
          <Button type="success"><Glyph icon="squirrel" /></Button>
          <Button type="warning"><Glyph icon="beaker" /></Button>          

        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
