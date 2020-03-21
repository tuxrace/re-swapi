import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../store";
import Details from "../Details";

test("renders Details", () => {
  const props = {
    data: {
      name: "Luke Skywalker",
      height: "172"
    },
    handleClose: () => {},
  }
  const { queryByText } = render(
    <Provider store={store}>
      <Details {...props} />
    </Provider>
  );

  expect(queryByText(/Characther/i)).toBeDefined();
});
