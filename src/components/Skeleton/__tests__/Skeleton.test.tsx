import { render } from "@testing-library/react";
import theme from "../../../theme";
import { ThemeProvider } from "styled-components";
import Skeleton from "..";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

const MakeSut = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Skeleton />
      </ThemeProvider>
    </Provider>
  );
};

describe("Skeleton component", () => {
  test("should render Skeleton", async () => {
    const component = render(<MakeSut />);
    expect(component).toBeTruthy();
  });
});
