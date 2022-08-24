import { render, screen } from "@testing-library/react";
import theme from "../../../theme";
import { ThemeProvider } from "styled-components";
import Footer from "..";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

const MakeSut = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    </Provider>
  );
};

describe("Footer component", () => {
  test("display Footer with infos", async () => {
    render(<MakeSut />);
    const description = screen.queryByText(
      /MKS sistemas © Todos os direitos reservados/i
    );
    expect(description).toBeInTheDocument();
  });
});
