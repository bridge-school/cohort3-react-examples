import React from "react"; // need to import to write JSX
import renderer from "react-test-renderer"; // since we aren't mounting to the DOM, we need to mock render component trees
import { Friend } from "./friend"; // import the component to test

test("Friend component renders with a persons first and last name", () => {
  const component = renderer.create(<Friend firstName={"Jon"} last={"Snow"} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// write a test to check that if no last name is provided, it only displays the firstname
