// The purpose of this file is to handle the frontend logic and interact with the backend API.

$(document).ready(function() {
    $('#injectForm').submit(function(event) {
        event.preventDefault();
        var url = $('#urlInput').val();
        var payload = $('#payloadInput').val();
        
        if (validateInputs(url, payload)) {
            sendInjectRequest(url, payload);
        }
    });

    $('#cancelButton').click(function() {
        cancelInjectRequest();
    });

    $('#resultButton').click(function() {
        getInjectResult();
    });

    $('#statusButton').click(function() {
        getInjectStatus();
    });
});

function validateInputs(url, payload) {
    if (url.trim() === '') {
        $('#errorArea').text('Error: URL is required');
        return false;
    }

    if (payload.trim() === '') {
        $('#errorArea').text('Error: Payload is required');
        return false;
    }

    return true;
}

function sendInjectRequest(url, payload) {
    $.ajax({
        url: '/api/inject',
        type: 'POST',
        data: JSON.stringify({url: url, payload: payload}),
        contentType: 'application/json',
        beforeSend: function() {
            $('#resultArea').text('Sending inject request...');
            $('#statusArea').text('');
            $('#errorArea').text('');
            $('#injectButton').prop('disabled', true);
            $('#cancelButton').prop('disabled', true);
        },
        success: function(response) {
            $('#resultArea').text(response.result);
            $('#statusArea').text(response.status);
            $('#injectButton').prop('disabled', false);
            $('#cancelButton').prop('disabled', false);
        },
        error: function(xhr, status, error) {
            $('#errorArea').text('Error: ' + error);
            $('#injectButton').prop('disabled', false);
            $('#cancelButton').prop('disabled', false);
        }
    });
}

function cancelInjectRequest() {
    $.ajax({
        url: '/api/inject/{id}/cancel',
        type: 'POST',
        beforeSend: function() {
            $('#resultArea').text('');
            $('#statusArea').text('Cancelling inject request...');
            $('#errorArea').text('');
            $('#injectButton').prop('disabled', true);
            $('#cancelButton').prop('disabled', true);
        },
        success: function(response) {
            $('#statusArea').text('Cancelled');
            $('#injectButton').prop('disabled', false);
            $('#cancelButton').prop('disabled', false);
        },
        error: function(xhr, status, error) {
            $('#errorArea').text('Error: ' + error);
            $('#injectButton').prop('disabled', false);
            $('#cancelButton').prop('disabled', false);
        }
    });
}

function getInjectResult() {
    $.ajax({
        url: '/api/inject/{id}/result',
        type: 'GET',
        beforeSend: function() {
            $('#resultArea').text('Fetching inject result...');
            $('#errorArea').text('');
            $('#resultButton').prop('disabled', true);
            $('#statusButton').prop('disabled', true);
        },
        success: function(response) {
            $('#resultArea').text(response.result);
            $('#resultButton').prop('disabled', false);
            $('#statusButton').prop('disabled', false);
        },
        error: function(xhr, status, error) {
            $('#errorArea').text('Error: ' + error);
            $('#resultButton').prop('disabled', false);
            $('#statusButton').prop('disabled', false);
        }
    });
}

function getInjectStatus() {
    $.ajax({
        url: '/api/inject/{id}/status',
        type: 'GET',
        beforeSend: function() {
            $('#statusArea').text('Fetching inject status...');
            $('#errorArea').text('');
            $('#resultButton').prop('disabled', true);
            $('#statusButton').prop('disabled', true);
        },
        success: function(response) {
            $('#statusArea').text(response.status);
            $('#resultButton').prop('disabled', false);
            $('#statusButton').prop('disabled', false);
        },
        error: function(xhr, status, error) {
            $('#errorArea').text('Error: ' + error);
            $('#resultButton').prop('disabled', false);
            $('#statusButton').prop('disabled', false);
        }
    });
}
