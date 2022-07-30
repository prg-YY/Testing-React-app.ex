import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Greeting from "./Greeting"

describe("Greeting component", () => {
  test("renders hello world as a text", () => {
    //Arrange
    render(<Greeting />)

    //Act
    //...nothing

    //Assert
    const helloWorldEl = screen.getByText("Hello World!")
    expect(helloWorldEl).toBeInTheDocument()
  })

  test("renders 'good to see you' if the button was not clicked", () => {
    //Arrange
    render(<Greeting />)

    //Act
    //...nothing

    //assert
    const beforeClickButton = screen.getByText("It's good to see you!", {
      expect: false,
    })
    expect(beforeClickButton).toBeInTheDocument()
  })

  test("renders 'Changed' if the button was  clicked", () => {
    render(<Greeting />)

    //Act
    const buttonEl = screen.getByRole("button")
    userEvent.click(buttonEl)
    //Assert
    const afterButtonClicked = screen.getByText("Changed!")
    expect(afterButtonClicked).toBeInTheDocument()
    //...nothing
  })

  test('Does not rander "good to see you!" if the button was clicked', () => {
    render(<Greeting />)

    //Act
    const buttonEl = screen.getByRole("button")
    userEvent.click(buttonEl)
    //Assert
    const outputEl = screen.queryByText("good to see you!", { expect: false })
    expect(outputEl).toBeNull()
    //...nothing
  })
})
