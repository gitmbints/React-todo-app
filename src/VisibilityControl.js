import React, { Component } from 'react';
import { 
  FormControl,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';

class VisibilityControl extends Component {
  render() { 
    return ( 
      <FormControl component="fieldset">
        <FormControlLabel
          value="end"
          control={
            <Checkbox 
              color="primary" 
              checked={this.props.isChecked} 
              onChange={(e) => this.props.callback(e.target.checked)} 
            />
          }
          label={`Show ${this.props.description}`}
          labelPlacement="end"
        />
      </FormControl>
     );
  }
}
 
export{ VisibilityControl };