// script.js
$(document).ready(function() {
    // Load meeting records and display them in the meeting list
    loadMeetingRecords();

    // Handle click event on meeting record item
    $(document).on('click', '.meeting-item', function() {
        var meetingId = $(this).data('id');
        var meetingSummary = getMeetingSummary(meetingId);
        displayMeetingSummary(meetingSummary);
    });

    // Handle input event on search input
    $('#searchInput').on('input', function() {
        var keyword = $(this).val();
        filterMeetingRecords(keyword);
    });

    // Handle click event on save PDF button
    $('#savePdfButton').click(function() {
        saveMeetingSummaryAsPdf();
    });
});

function loadMeetingRecords() {
    // Send request to backend API to get meeting records
    // Replace API_ENDPOINT with the actual API endpoint
    $.ajax({
        url: API_ENDPOINT + '/meeting-records',
        method: 'GET',
        success: function(response) {
            var meetingRecords = response.meetingRecords;
            displayMeetingRecords(meetingRecords);
        },
        error: function() {
            alert('Failed to load meeting records.');
        }
    });
}

function displayMeetingRecords(meetingRecords) {
    var meetingList = $('#meetingList');
    meetingList.empty();

    for (var i = 0; i < meetingRecords.length; i++) {
        var meetingRecord = meetingRecords[i];
        var listItem = $('<div class="item meeting-item"></div>');
        listItem.data('id', meetingRecord.id);
        listItem.append('<div class="content"><div class="header">' + meetingRecord.title + '</div><div class="description">' + meetingRecord.date + '</div></div>');
        meetingList.append(listItem);
    }
}

function getMeetingSummary(meetingId) {
    // Send request to backend API to get meeting summary
    // Replace API_ENDPOINT with the actual API endpoint
    var meetingSummary = '';

    $.ajax({
        url: API_ENDPOINT + '/meeting-summary/' + meetingId,
        method: 'GET',
        success: function(response) {
            meetingSummary = response.meetingSummary;
            displayMeetingSummary(meetingSummary);
        },
        error: function() {
            alert('Failed to get meeting summary.');
        }
    });
}

function displayMeetingSummary(meetingSummary) {
    var meetingSummaryContainer = $('#meetingSummary');
    meetingSummaryContainer.text(meetingSummary);
}

function filterMeetingRecords(keyword) {
    var meetingItems = $('.meeting-item');

    for (var i = 0; i < meetingItems.length; i++) {
        var meetingItem = $(meetingItems[i]);
        var meetingTitle = meetingItem.find('.header').text();

        if (meetingTitle.toLowerCase().includes(keyword.toLowerCase())) {
            meetingItem.show();
        } else {
            meetingItem.hide();
        }
    }
}

function saveMeetingSummaryAsPdf() {
    var meetingSummary = $('#meetingSummary').text();

    // Send request to backend API to save meeting summary as PDF
    // Replace API_ENDPOINT with the actual API endpoint
    $.ajax({
        url: API_ENDPOINT + '/save-pdf',
        method: 'POST',
        data: {
            meetingSummary: meetingSummary
        },
        success: function(response) {
            alert('Meeting summary saved as PDF.');
        },
        error: function() {
            alert('Failed to save meeting summary as PDF.');
        }
    });
}
