<div style="text-align:center;">
  <img src="./public/logo-96.png" alt="SMSio logo" style="display: inline-block; margin: 0 auto;">
</div>

<div style="text-align:center;">
   <h1 style="display: inline-block;">SMSio Chrome Extension</h1>
</div>

SMSio is a Proof of Concept (PoC) Chrome extension developed to facilitate internal users in sending SMS messages using their IDs. The extension is built with React for the frontend and Express for the backend using the [Twilio API](https://www.twilio.com/docs/sms).

## Features

- **User-Friendly Interface**: Simple and intuitive interface for sending SMS messages.
- **ID-Based Authentication**: Users can send SMS messages using their IDs for internal communication.
- **React and Express**: Built with React for the frontend and Express for the backend, showcasing a modern and efficient tech stack.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/SMSio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd SMSio
   ```

3. Install dependencies for both the frontend and backend:

   ```bash
   cd frontend
   npm install
   ```

4. Start the development servers:

   ```bash
   # For the frontend directory
   cd ../frontend
   npm start
   ```

5. Open Google Chrome -or any other chromium-based browser- and go to `chrome://extensions/`.
6. Enable "Developer mode" in the top right.
7. Click "Load unpacked" and select the `build` folder in the `frontend` directory.

## Usage

1. After installation, the SMSio icon will appear in the Chrome toolbar.
2. Click on the SMSio icon to open the extension popup.
3. Enter your ID and compose your SMS message.
4. Click "Send" to dispatch the SMS.

## Development

- **Frontend**: React is used for the frontend. The source code is in the `frontend/src` directory.
- **Backend**: Express serves as the backend. The source code is in the `backend/src` directory.

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Feel free to contribute by opening issues or creating pull requests. Follow the [contribution guidelines](CONTRIBUTING.md) for more information.

## Acknowledgments

- Thanks to [Dallel](https://github.com/dallalgaham) for their inspiration and guidance.

---

**Note:** This is a Proof of Concept (PoC) project and may not be suitable for production use.
