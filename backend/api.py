from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/data', methods=['GET'])
def get_data():
    # Retrieve the request parameters
    name = request.args.get('name')
    courses = request.args.get('courses')
    projects = request.args.get('projects')

    # Check if all required parameters are present
    if not name or not courses or not projects:
        return jsonify({'error': 'Missing required parameters'}), 400

    # Validate the request parameters
    if not isinstance(name, str) or not isinstance(courses, str) or not isinstance(projects, str):
        return jsonify({'error': 'Invalid parameter types'}), 400

    # Sanitize the request parameters
    name = name.strip()
    courses = courses.strip()
    projects = projects.strip()

    # Process the request parameters and retrieve the data from the database
    # Replace the following code with the actual logic to retrieve the data from the database
    data = {
        'name': name,
        'courses': courses,
        'projects': projects
    }

    # Return the data as a JSON response
    return jsonify(data)

if __name__ == '__main__':
    app.run()
