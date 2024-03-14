// js/script.js
$(document).ready(function() {
  // Load overview content on page load
  loadOverviewContent();

  // Handle navigation link clicks
  $("#overview-link").click(function() {
    loadOverviewContent();
  });

  $("#category-link").click(function() {
    loadCategoryContent();
  });

  // Handle like button click
  $(document).on("click", ".like-button", function() {
    var sketchId = $(this).data("sketch-id");
    likeSketch(sketchId);
  });

  // Handle comment form submission
  $(document).on("submit", "#comment-form", function(event) {
    event.preventDefault();
    var sketchId = $(this).data("sketch-id");
    var commentContent = $("#comment-input").val();
    submitComment(sketchId, commentContent);
  });
});

// Load overview content
function loadOverviewContent() {
  $.ajax({
    url: "/api/overview",
    method: "GET",
    success: function(response) {
      displayOverviewContent(response);
    },
    error: function(error) {
      console.log("Error loading overview content:", error);
    }
  });
}

// Display overview content
function displayOverviewContent(content) {
  var html = "<h2>" + content.title + "</h2>";
  html += "<p>" + content.description + "</p>";
  $("#content-area").html(html);
}

// Load category content
function loadCategoryContent() {
  $.ajax({
    url: "/api/category",
    method: "GET",
    success: function(response) {
      displayCategoryContent(response);
    },
    error: function(error) {
      console.log("Error loading category content:", error);
    }
  });
}

// Display category content
function displayCategoryContent(content) {
  var html = "";
  for (var i = 0; i < content.length; i++) {
    var sketch = content[i];
    html += "<div class='ui card'>";
    html += "<div class='content'>";
    html += "<div class='header'>" + sketch.title + "</div>";
    html += "<div class='description'>" + sketch.description + "</div>";
    html += "</div>";
    html += "<div class='extra content'>";
    html += "<button class='ui basic button like-button' data-sketch-id='" + sketch.id + "'>Like</button>";
    html += "</div>";
    html += "</div>";
  }
  $("#content-area").html(html);
}

// Like a sketch
function likeSketch(sketchId) {
  $.ajax({
    url: "/api/like",
    method: "POST",
    data: { sketchId: sketchId },
    success: function(response) {
      console.log("Sketch liked:", response);
    },
    error: function(error) {
      console.log("Error liking sketch:", error);
    }
  });
}

// Submit a comment
function submitComment(sketchId, commentContent) {
  $.ajax({
    url: "/api/comment",
    method: "POST",
    data: { sketchId: sketchId, commentContent: commentContent },
    success: function(response) {
      console.log("Comment submitted:", response);
    },
    error: function(error) {
      console.log("Error submitting comment:", error);
    }
  });
}
