$(document).ready(function() {
  $('#overview-link, #overview-sidebar-link').click(function() {
    $.ajax({
      url: '/api/overview',
      method: 'GET',
      success: function(response) {
        displayOverview(response);
      },
      error: function(error) {
        displayError(error);
      }
    });
  });

  $('#category-link, #category-sidebar-link').click(function() {
    $.ajax({
      url: '/api/category',
      method: 'GET',
      success: function(response) {
        displayCategory(response);
      },
      error: function(error) {
        displayError(error);
      }
    });
  });

  $('.ui.icon.input input').keypress(function(event) {
    if (event.which === 13) {
      var keyword = $(this).val();
      $.ajax({
        url: '/api/search',
        method: 'GET',
        data: { keyword: keyword },
        success: function(response) {
          displaySearchResults(response);
        },
        error: function(error) {
          displayError(error);
        }
      });
    }
  });

  function displayOverview(data) {
    var overviewArea = $('#content-area');
    overviewArea.empty();
    overviewArea.append('<h2>' + data.title + '</h2>');
    overviewArea.append('<p>' + data.description + '</p>');
  }

  function displayCategory(data) {
    var categoryArea = $('#content-area');
    categoryArea.empty();
    for (var i = 0; i < data.length; i++) {
      var sketch = data[i];
      categoryArea.append('<h3>' + sketch.title + '</h3>');
      categoryArea.append('<p>' + sketch.description + '</p>');
    }
  }

  function displaySearchResults(data) {
    var searchResultsArea = $('#content-area');
    searchResultsArea.empty();
    for (var i = 0; i < data.length; i++) {
      var sketch = data[i];
      searchResultsArea.append('<h3>' + sketch.title + '</h3>');
      searchResultsArea.append('<p>' + sketch.description + '</p>');
    }
  }

  function displayError(error) {
    var errorArea = $('#content-area');
    errorArea.empty();
    errorArea.append('<p>Error: ' + error.statusText + '</p>');
  }
});
