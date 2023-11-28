$(document).ready(function() {
    loadQuestionnaires();

    function loadQuestionnaires() {
        $.ajax({
            url: "/api/questionnaires",
            method: "GET",
            success: function(response) {
                displayQuestionnaires(response.questionnaires);
            },
            error: function(error) {
                showError("Failed to load questionnaires.");
            }
        });
    }

    function displayQuestionnaires(questionnaires) {
        var questionnaireList = $("#questionnaire-list");
        questionnaireList.empty();

        for (var i = 0; i < questionnaires.length; i++) {
            var questionnaire = questionnaires[i];
            var listItem = $("<div>").addClass("ui segment");
            var title = $("<h3>").text(questionnaire.title);
            var viewButton = $("<button>").text("View Details").addClass("ui button").click(function() {
                var questionnaireId = $(this).data("questionnaire-id");
                loadQuestionnaireDetails(questionnaireId);
            }).data("questionnaire-id", questionnaire.id);
            listItem.append(title, viewButton);
            questionnaireList.append(listItem);
        }
    }

    function loadQuestionnaireDetails(questionnaireId) {
        $.ajax({
            url: "/api/questionnaires/" + questionnaireId,
            method: "GET",
            success: function(response) {
                displayQuestionnaireDetails(response.questionnaire);
            },
            error: function(error) {
                showError("Failed to load questionnaire details.");
            }
        });
    }

    function displayQuestionnaireDetails(questionnaire) {
        var questionnaireDetails = $("#questionnaire-details");
        questionnaireDetails.empty();

        var title = $("<h2>").text(questionnaire.title);
        var questions = $("<ul>");
        for (var i = 0; i < questionnaire.questions.length; i++) {
            var question = questionnaire.questions[i];
            var listItem = $("<li>").text(question);
            questions.append(listItem);
        }

        questionnaireDetails.append(title, questions);
    }

    function submitQuestionnaire(questionnaireId, answers) {
        $.ajax({
            url: "/api/questionnaires/" + questionnaireId + "/submit",
            method: "POST",
            data: { answers: answers },
            success: function(response) {
                showSuccess("Questionnaire submitted successfully.");
            },
            error: function(error) {
                showError("Failed to submit questionnaire.");
            }
        });
    }

    function loadQuestionnaireResults(questionnaireId) {
        $.ajax({
            url: "/api/questionnaires/" + questionnaireId + "/results",
            method: "GET",
            success: function(response) {
                displayQuestionnaireResults(response.results);
            },
            error: function(error) {
                showError("Failed to load questionnaire results.");
            }
        });
    }

    function displayQuestionnaireResults(results) {
        var questionnaireResults = $("#questionnaire-results");
        questionnaireResults.empty();

        for (var i = 0; i < results.length; i++) {
            var questionResult = results[i];
            var questionTitle = $("<h3>").text(questionResult.question);
            var answerCounts = $("<ul>");
            for (var j = 0; j < questionResult.answers.length; j++) {
                var answer = questionResult.answers[j];
                var listItem = $("<li>").text(answer.answer + ": " + answer.count);
                answerCounts.append(listItem);
            }
            questionnaireResults.append(questionTitle, answerCounts);
        }
    }

    function showSuccess(message) {
        alert(message);
    }

    function showError(message) {
        alert(message);
    }
});
