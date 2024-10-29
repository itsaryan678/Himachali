## Himachali 

A simple npm package for accessing the GPT API.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Animated Beautiful Fonts](#animated-beautiful-fonts)
- [Styling Tips](#styling-tips)
- [Contributing](#contributing)
- [License](#license)
- [Bugs and Issues](#bugs-and-issues)

## Installation

You can install this package via npm:

```bash
npm install Himachali

Usage

Here's how you can use the globalsprak package to interact with the GPT API:

const { gpt } = require('Himachali');

async function getGptResponse(prompt) {
  const response = await gpt(prompt);
  console.log(response);
}

getGptResponse("What is the capital of France?");

API

gpt(prompt)

Description: Fetches a response from the GPT API based on the provided prompt.

Parameters:

prompt (string): The text prompt you want to send to the GPT API.


Returns: A promise that resolves to the API response data or null if an error occurs.
