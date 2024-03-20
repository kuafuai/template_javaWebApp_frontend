// COMMENT
$(document).ready(function() {
    // Function to load contact list
    function loadContactList() {
        // Send request to backend API to get contact list
        $.ajax({
            url: '/api/get_contact_list',
            method: 'GET',
            success: function(response) {
                // Update contact list in the sidebar
                var contactList = response.contact_list;
                var contactListHtml = '';
                for (var i = 0; i < contactList.length; i++) {
                    contactListHtml += '<li>' + contactList[i].nickname + '</li>';
                }
                $('#contact-list').html(contactListHtml);
            },
            error: function(error) {
                console.log(error);
                // Display error message to the user
                $('#contact-list').html('Error loading contact list');
            }
        });
    }

    // Function to send message
    function sendMessage(toUser, content) {
        // Send request to backend API to send message
        $.ajax({
            url: '/api/send_message',
            method: 'POST',
            data: {
                to_user: toUser,
                content: content
            },
            success: function(response) {
                // Handle success response
                console.log(response);
                // Display success message to the user
                $('#message-status').html('Message sent successfully');
            },
            error: function(error) {
                console.log(error);
                // Display error message to the user
                $('#message-status').html('Error sending message');
            }
        });
    }

    // Function to add friend
    function addFriend(friendUsername) {
        // Send request to backend API to add friend
        $.ajax({
            url: '/api/add_friend',
            method: 'POST',
            data: {
                friend_username: friendUsername
            },
            success: function(response) {
                // Handle success response
                console.log(response);
                // Display success message to the user
                $('#friend-status').html('Friend added successfully');
            },
            error: function(error) {
                console.log(error);
                // Display error message to the user
                $('#friend-status').html('Error adding friend');
            }
        });
    }

    // Load contact list on page load
    loadContactList();

    // Event listener for sending message
    $('#send-message-form').submit(function(event) {
        event.preventDefault();
        var toUser = $('#to-user-input').val();
        var content = $('#message-content-input').val();
        
        // Validate input fields
        if (toUser.trim() === '' || content.trim() === '') {
            $('#message-status').html('Please enter a valid recipient and message content');
            return;
        }
        
        sendMessage(toUser, content);
    });

    // Event listener for adding friend
    $('#add-friend-form').submit(function(event) {
        event.preventDefault();
        var friendUsername = $('#friend-username-input').val();
        
        // Validate input field
        if (friendUsername.trim() === '') {
            $('#friend-status').html('Please enter a valid friend username');
            return;
        }
        
        addFriend(friendUsername);
    });
});
