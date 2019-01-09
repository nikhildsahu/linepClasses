import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";

// The `withStyles()` higher-order component is injecting a `classes`
// property that is used by the `Button` component.
const StyledButton = withStyles({
  root: {
    width: 400
  }
})(ListItem);

export default function NoteItem() {
  return <StyledButton>Classes Shorthand</StyledButton>;
}
