/* js/script.js */
$(document).ready(function() {
    // Load field names and field values on page load
    loadFieldNames();
    loadFieldValues();

    // Create field name
    $("#createFieldNameForm").submit(function(event) {
        event.preventDefault();
        var fieldName = $("#fieldNameInput").val();
        createFieldName(fieldName);
    });

    // Create field value
    $("#createFieldValueForm").submit(function(event) {
        event.preventDefault();
        var fieldValue = $("#fieldValueInput").val();
        createFieldValue(fieldValue);
    });

    // Update field value status
    $("#updateFieldValueStatusButton").click(function() {
        updateFieldValueStatus();
    });

    // Create application config
    $("#createApplicationConfigForm").submit(function(event) {
        event.preventDefault();
        var applicationConfig = $("#applicationConfigInput").val();
        createApplicationConfig(applicationConfig);
    });

    // Get field values
    $("#getFieldValuesForm").submit(function(event) {
        event.preventDefault();
        var fieldName = $("#fieldNameInput").val();
        getFieldValues(fieldName);
    });
});

function loadFieldNames() {
    // Send HTTP request to get field names
    $.ajax({
        url: "/api/fieldNames",
        method: "GET",
        success: function(response) {
            // Display field names in #fieldNamesList
            var fieldNamesList = $("#fieldNamesList");
            fieldNamesList.empty();
            response.forEach(function(fieldName) {
                fieldNamesList.append("<li>" + fieldName + "</li>");
            });
        },
        error: function(error) {
            console.log("Error loading field names:", error);
        }
    });
}

function loadFieldValues() {
    // Send HTTP request to get field values
    $.ajax({
        url: "/api/fieldValues",
        method: "GET",
        success: function(response) {
            // Display field values in #fieldValuesList
            var fieldValuesList = $("#fieldValuesList");
            fieldValuesList.empty();
            response.forEach(function(fieldValue) {
                fieldValuesList.append("<li>" + fieldValue + "</li>");
            });
        },
        error: function(error) {
            console.log("Error loading field values:", error);
        }
    });
}

function createFieldName(fieldName) {
    // Send HTTP request to create field name
    $.ajax({
        url: "/api/fieldNames",
        method: "POST",
        data: { fieldName: fieldName },
        success: function(response) {
            // Display created field name in #fieldNamesList
            var fieldNamesList = $("#fieldNamesList");
            fieldNamesList.append("<li>" + response.fieldName + "</li>");
        },
        error: function(error) {
            console.log("Error creating field name:", error);
        }
    });
}

function createFieldValue(fieldValue) {
    // Send HTTP request to create field value
    $.ajax({
        url: "/api/fieldValues",
        method: "POST",
        data: { fieldValue: fieldValue },
        success: function(response) {
            // Display created field value in #fieldValuesList
            var fieldValuesList = $("#fieldValuesList");
            fieldValuesList.append("<li>" + response.fieldValue + "</li>");
        },
        error: function(error) {
            console.log("Error creating field value:", error);
        }
    });
}

function updateFieldValueStatus() {
    // Send HTTP request to update field value status
    $.ajax({
        url: "/api/fieldValues/status",
        method: "PUT",
        success: function(response) {
            // Display updated field value status in #fieldValuesList
            var fieldValuesList = $("#fieldValuesList");
            fieldValuesList.empty();
            response.forEach(function(fieldValue) {
                fieldValuesList.append("<li>" + fieldValue + "</li>");
            });
        },
        error: function(error) {
            console.log("Error updating field value status:", error);
        }
    });
}

function createApplicationConfig(applicationConfig) {
    // Send HTTP request to create application config
    $.ajax({
        url: "/api/applicationConfig",
        method: "POST",
        data: { applicationConfig: applicationConfig },
        success: function(response) {
            // Display created application config in #configurationDetails
            var configurationDetails = $("#configurationDetails");
            configurationDetails.text(response.applicationConfig);
        },
        error: function(error) {
            console.log("Error creating application config:", error);
        }
    });
}

function getFieldValues(fieldName) {
    // Send HTTP request to get field values for a field name
    $.ajax({
        url: "/api/fieldValues",
        method: "GET",
        data: { fieldName: fieldName },
        success: function(response) {
            // Display field values in #fieldValuesResult
            var fieldValuesResult = $("#fieldValuesResult");
            fieldValuesResult.empty();
            response.forEach(function(fieldValue) {
                fieldValuesResult.append("<li>" + fieldValue + "</li>");
            });
        },
        error: function(error) {
            console.log("Error getting field values:", error);
        }
    });
}
