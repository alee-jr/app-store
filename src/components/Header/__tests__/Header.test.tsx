import { render, screen } from "@testing-library/react";
import theme from "../../../theme";
import { ThemeProvider } from "styled-components";
import Header from "..";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

const MakeSut = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </Provider>
  );
};

describe("Header component", () => {
  test("display Header with infos", async () => {
    render(<MakeSut />);
    const title = screen.queryByText(/MKS/i);
    const subtitle = screen.queryByText(/Sistemas/i);
    const cartLength = screen.queryByText(/0/i);

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(cartLength).toBeInTheDocument();
  });
});
