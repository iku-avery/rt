import React, { Component } from "react";
import { generateLoremIpsum } from "./generator";

interface IpsumGeneratorState {
  paragraphs: number;
  text: string;
}

export default class IpsumGenerator extends Component<{}, IpsumGeneratorState> {
  state = {
    paragraphs: 1, // Default value set to 1
    text: ""
  };

  // Handle input change for number of paragraphs
  changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    let paragraphs = Number(e.target.value);
    // Restrict paragraphs to be between 1 and 5
    if (paragraphs < 1) paragraphs = 1;
    if (paragraphs > 5) paragraphs = 5;
    this.setState({
      paragraphs
    });
  };

  // Handle the form submission to generate the paragraphs
  submitHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page refresh
    const number = this.state.paragraphs; // Already restricted to 1-5
    const generatedText = generateLoremIpsum(number);

    this.setState({
      text: generatedText // Update state with the generated paragraphs
    });
  };

  render() {
    return (
      <div className="Lorem">
        <h2>pupi pupi arrrrrr</h2>
        <form onSubmit={this.submitHandle}>
          <label>
            <input
              type="number"
              min="1"
              max="5"
              value={this.state.paragraphs}
              onChange={this.changeHandle}
              placeholder="Number of paragraphs"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        {/* Display the generated paragraphs */}
        <div className="lorem-text">
          {this.state.text.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    );
  }
}

