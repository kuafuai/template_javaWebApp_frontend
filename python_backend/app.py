from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/asset', methods=['POST'])
def register_asset():
    try:
        # Get the request body
        data = request.get_json()

        # Check if the request body is in JSON format
        if not data:
            return jsonify({'error': 'Invalid request body'}), 400

        # Extract the asset information
        asset_number = data.get('asset_number')
        name = data.get('name')
        specifications = data.get('specifications')
        purchase_date = data.get('purchase_date')
        purchase_price = data.get('purchase_price')

        # Validate the required fields
        if not asset_number or not name or not purchase_date or not purchase_price:
            return jsonify({'error': 'Missing required fields'}), 400

        # Perform additional validation checks if needed
        # ...

        # Perform the asset registration logic here
        # ...

        # Store the asset information in the database or make API calls
        # ...

        return jsonify({'message': 'Asset registered successfully'}), 200

    except ValueError:
        return jsonify({'error': 'Invalid request body'}), 400

if __name__ == '__main__':
    app.run()
