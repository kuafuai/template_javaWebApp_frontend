$(document).ready(function() {
  // Handle navigation bar click events
  $("#history-link").click(function() {
    showHistoryContent();
  });
  $("#process-link").click(function() {
    showProcessContent();
  });
  $("#characteristics-link").click(function() {
    showCharacteristicsContent();
  });
  $("#restaurant-link").click(function() {
    showRestaurantContent();
  });

  // Handle page scroll events
  $(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();
    if (scrollPosition < 500) {
      showHistoryContent();
    } else if (scrollPosition < 1000) {
      showProcessContent();
    } else if (scrollPosition < 1500) {
      showCharacteristicsContent();
    } else {
      showRestaurantContent();
    }
  });

  // Handle related recommendations click events
  $("#recommendations").on("click", ".recommendation-link", function() {
    var link = $(this).attr("href");
    window.location.href = link;
  });

  // Show initial content
  showHistoryContent();
});

// Function to show history content
function showHistoryContent() {
  // Clear previous content
  $("#content-area").empty();

  // Show history content
  $("#content-area").append("<h2>北京烤鸭的历史</h2>");
  $("#content-area").append("<p>北京烤鸭的历史内容</p>");

  // Update active link in navigation bar
  $(".item").removeClass("active");
  $("#history-link").addClass("active");
}

// Function to show process content
function showProcessContent() {
  // Clear previous content
  $("#content-area").empty();

  // Show process content
  $("#content-area").append("<h2>北京烤鸭的制作过程</h2>");
  $("#content-area").append("<p>北京烤鸭的制作过程内容</p>");

  // Update active link in navigation bar
  $(".item").removeClass("active");
  $("#process-link").addClass("active");
}

// Function to show characteristics content
function showCharacteristicsContent() {
  // Clear previous content
  $("#content-area").empty();

  // Show characteristics content
  $("#content-area").append("<h2>北京烤鸭的特点</h2>");
  $("#content-area").append("<p>北京烤鸭的特点内容</p>");

  // Update active link in navigation bar
  $(".item").removeClass("active");
  $("#characteristics-link").addClass("active");
}

// Function to show restaurant content
function showRestaurantContent() {
  // Clear previous content
  $("#content-area").empty();

  // Show restaurant content
  $("#content-area").append("<h2>推荐的餐厅</h2>");
  $("#content-area").append("<p>推荐的餐厅内容</p>");

  // Update active link in navigation bar
  $(".item").removeClass("active");
  $("#restaurant-link").addClass("active");
}

// Function to add recommendation to related recommendations
function addRecommendation(title, link) {
  var recommendation = $("<a>")
    .addClass("recommendation-link")
    .attr("href", link)
    .text(title);
  $("#recommendations").append(recommendation);
}

// Add sample recommendations
addRecommendation("其他美食", "#");
addRecommendation("旅游景点", "#");
