document.addEventListener('DOMContentLoaded', function() {
  var grid = document.querySelector('.grid');
  
  if (grid) {
    var masonry = new Masonry(grid, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true,
      gutter: 10
    });
    
    // Reload Masonry after images load
    imagesLoaded(grid, function() {
      masonry.layout();
    });
  }
});