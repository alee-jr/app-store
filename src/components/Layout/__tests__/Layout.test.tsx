import { render, screen } from "@testing-library/react";
import theme from "../../../theme";
import { ThemeProvider } from "styled-components";
import Layout from "..";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

const MakeSut = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <p>oi</p>
        </Layout>
      </ThemeProvider>
    </Provider>
  );
};

describe("Layout component", () => {
  test("should render layout and show children", async () => {
    const component = render(<MakeSut />);
    expect(component).toBeTruthy();
    const child = screen.getByText(/oi/i);
    expect(child).toBeInTheDocument();
  });
});
