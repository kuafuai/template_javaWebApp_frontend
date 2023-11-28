# Questionnaire App

This is a questionnaire application that allows administrators to create questionnaires, users to answer questionnaires, and collects and displays questionnaire results.

## Installation

1. Clone the repository.
2. Install the dependencies by running `npm install`.

## Usage

1. Start the server by running `npm start`.
2. Access the application in a web browser at `http://localhost:3000`.

## API Routes

- `POST /api/questionnaires`: Create a questionnaire.
- `GET /api/questionnaires`: Get the questionnaire list.
- `GET /api/questionnaires/:questionnaireId`: Get the questionnaire details.
- `POST /api/questionnaires/:questionnaireId/submit`: Submit a questionnaire.
- `GET /api/questionnaires/:questionnaireId/results`: Get the questionnaire results.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.