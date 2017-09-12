import {
  chartistBarsDashboard,
  chartistLineDashboard,
  chartistBiPolarChartDashboard,
  chartistPathAnimationDashboard
} from './dashboardCharts';
//
// Module for cards
// ----------------------------------
let card = {
  cardClass: ".card",
  cardHeadingClass: ".card .card-heading",
  cardBodyClass: ".card .card-body",
  cardFooterClass: ".card .card-footer",
  cardRevealClass: ".card .card-reveal",
  cardRefresh: '.card a[data-toggle="refresh"]',
  cardClose: '.card a[data-toggle="close"]',
  cardCollapse: '.card a[data-toggle="collapse"]',
  cardToggleHighlighter: 'a[data-toggle-view="code"]',
  cardSearchOpen: 'a[data-card-search="open"]',
  cardSearchClose: '[data-card-search="close"]',
  cardRevealToggle: '[data-toggle="reveal"]'
};
const cardRefresh = () => {
  $(document).on("click", card.cardRefresh, function(e) {
    e.preventDefault();
    var $card = $(this).closest(card.cardClass);
    $card.append(`<div class="load"></div>`);
    var $loader = $card.find('.load');
    $loader.load('assets/partials/_preloader.html', function() {
      setTimeout(function() {
        $loader.fadeOut('1500', function() {
          $loader.remove();
        });
      }, 1700)
    });
  });
};
// Card collapse
const cardCollapse = () => {
  $(document).on("click", card.cardCollapse, function(e) {
    e.preventDefault();
    $(this).children('i').toggleClass('zmdi-chevron-up zmdi-chevron-down')
    var $cardBody = $(this).closest(".card").children('.card-body');
    $cardBody.slideToggle();
  });
}
// Toggle Syntax Highlighter
const cardToggleHighlighter = () => {
  $(document).on("click", card.cardToggleHighlighter, function(e) {
    e.preventDefault();
    var $cardContianer = $(this).closest(".card").find('.syntax-highlighter');
    $cardContianer.slideToggle();
  });
}
// Menu off-canvas
const cardOffCanvas = () => {
  $('[data-card-off-canvas]').on('click', function() {
    var $this = $(this),
    cardClass = $this.data('card-off-canvas');
    $this.toggleClass(cardClass);
    $this.closest('.card').find('.card-body').toggleClass(cardClass);
    $this.parents('.card').find('.card-off-canvas').toggleClass(cardClass);
    if ($('.card-off-canvas.is-active').length > 0) {
      $this.closest('.card.drawer ').prepend('<div class="card-backdrop"></div>')
    } else {
      $this.parents('.drawer').find('.card-backdrop').remove();
    }
  });
  $(document.body).on('click', '.card .card-backdrop', function() {
    $('[data-card-off-canvas]').trigger('click');
  });
};
// Card stacks
const cardStacks = () => {
  $(".card-stack-wrapper > li").on("click", function(e) {
    e.preventDefault();
    var a = $(this).parents(".card-stack-wrapper");
    $(this).appendTo(a);
    if (a.is('#chartistBarsDashboard')) {
      setTimeout(function() {
        chartistBarsDashboard()
      }, 200);
    } else if (a.is('#chartistLineDashboard')) {
      setTimeout(function() {
        chartistLineDashboard()
      }, 200);
    } else if (a.is('#chartistBiPolarChartDashboard')) {
      setTimeout(function() {
        chartistBiPolarChartDashboard()
      }, 200);
    } else if (a.is('#chartistPathAnimationDashboard')) {
      setTimeout(function() {
        chartistPathAnimationDashboard()
      }, 200);
    }
  });
};
// Card task
const cardTask = () => {
  $('[data-toggle="input"]').on('click',function(){
      $(this).toggleClass('open');
      let $taskForm = $(this).parents('.card-task').find('form');
          $taskForm .toggleClass('open');
          $taskForm.find('input').focus();
  })
  if ($('.checklist input[type=checkbox]').length > 0) {
    var i = 1,
    $taskList = $('.checklist input[type=checkbox]');
    $taskList.each(function(i) {
      $(this).attr('id', 'task_' + i);
    });
    $taskList.change(function() {
      if (this.checked) {
        $(this).closest('label').css({
          'text-decoration': 'line-through'
        });
      } else {
        $(this).closest('label').css({
          'text-decoration': 'none'
        })
      }
    });
  };
};
// Card Search
const cardSearch = () => {
  $(document).on("click", card.cardSearchOpen, function(e) {
    e.preventDefault();
    let $this = $(this),
    $card = $this.closest(card.cardClass),
    $cardSearch = $card.find('.card-search'),
    cardClass = $this.data('cardSearch');
    $cardSearch.addClass(cardClass);
    $cardSearch.find('.form-control').focus();
  });
  $(document).on("click", card.cardSearchClose, function(e) {
    e.preventDefault();
    let $this = $(this),
    $card = $this.closest('.card'),
    $cardSearch = $card.find('.card-search'),
    cardClass = $this.data('cardSearch');
    $cardSearch.removeClass('open');
    $cardSearch.find('.form-control').val('');
    if ($card.hasClass('card-data-tables')) {
      var oTable = $('.dataTable').DataTable();
      oTable.search($(this).val()).draw();
    }
  });
}
// Toggle Card Reveal
const cardReveal = () => {
  $(document).on("click", card.cardRevealToggle, function(e) {
    e.preventDefault();
    var $cardRevealContianer = $(this).closest(".card.reveal");
    $cardRevealContianer.toggleClass('open');
    $('.email-form input,.email-form textarea').val('');
    if ($cardRevealContianer.hasClass('open')) {
      setTimeout(function() {
        $('#email-to').focus();
      }, 100);
    }
  });
}
export {
  cardRefresh,
  cardCollapse,
  cardOffCanvas,
  cardStacks,
  cardTask,
  cardToggleHighlighter,
  cardSearch,
  cardReveal
}
