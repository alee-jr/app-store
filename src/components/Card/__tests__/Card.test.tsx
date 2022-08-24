import { render, screen } from "@testing-library/react";
import theme from "../../../theme";
import { ThemeProvider } from "styled-components";
import Card from "..";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

const productMock = {
  id: 8,
  title: "Headset Cloud Stinger",
  description:
    "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
  image:
    "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
  price: "600.00",
  buttonTitle: "COMPRAR",
};

const MakeSut = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Card {...productMock} onClick={() => jest.fn()} />
      </ThemeProvider>
    </Provider>
  );
};

describe("Card component", () => {
  test("display card with infos", async () => {
    render(<MakeSut />);

    const title = screen.queryByText(/Headset Cloud Stinger/i);
    const description = screen.queryByText(
      /O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade./i
    );
    const price = screen.queryByText(/600,00/i);
    const buttonTitle = screen.queryByText(/COMPRAR/i);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(buttonTitle).toBeInTheDocument();
  });
});
