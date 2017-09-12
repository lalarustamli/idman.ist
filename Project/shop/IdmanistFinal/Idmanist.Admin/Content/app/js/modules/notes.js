let notes = {
  triggerInput: '.card-add-note',
  noteForm: '#note_form .card-body',
  noteTitle: '#noteTitle',
  noteHeading: '.card-heading',
  selected: '[data-note="selected"]'
};
const allNotes = () => {
  let $eachNote = $('.card-notes div[id*=note_id_]'),
  count = 0;
  $eachNote.each(function() {
    $(this).attr('id', 'note_id_' + count);
    count++;
  });
  $('.card-note').each(function() {
    if ($(this).find('.card-body p').text().length <= 20) {
      $(this).find('.card-body p').css({
        'font-size': '48px',
        'line-height':'1.2em'
      });
    } else if($(this).find('.card-body p').text().length <= 45){
      $(this).find('.card-body p').css({
        'font-size': '32px',
        'line-height':'1.5em'
      });
    }else if($(this).find('.card-body p').text().length <= 75){
      $(this).find('.card-body p').css({
        'font-size': '22px',
        'line-height':'1.6em'
      });
    }
  });
  $('#masonry').masonry({
    itemSelector: '.masonry-item'
  });
};
const notesAdd = () => {
  $(notes.triggerInput).on("click", function(e) {
    $(this).addClass('open');
    e.stopPropagation();
  });
  if ($(notes.noteForm).is(':visible')) {
    $(notes.triggerInput).on('click', function(e) {
      e.stopPropagation();
      $('#note_form .card-actions li.dropdown').removeClass('open');
    });
  }
  $('#note_form .card-actions li.dropdown').on('click',function(e) {
    $(this).toggleClass('open');
    e.stopPropagation();
  });
  $('body').on('click', function(e) {
    $(notes.triggerInput).removeClass('open');
    $('#note_form .card-actions li.dropdown').removeClass('open');
    $('#note-color-wrapper').attr('class', '');
  });
}
const noteSelected = () => {
  $('a[data-note="selected"]').on('click', function(e) {
      e.stopPropagation();
    $(this).closest('.card-note').toggleClass('selected');
    checkSlected();
  });
  $('.card-note .card-heading,.card-note .card-body,#header_action_bar').on('click', function(e) {
    e.stopPropagation();
  });
  $('#header_action_bar .dropdown').on('click', function(e) {
        e.stopPropagation();
    $(this).toggleClass('open');
  });
  $('body').on('click', function(e) {
    $('.card-note').removeClass('selected');
    checkSlected();
  });
}
const checkSlected = () => {
  let $eachNote = $('.notes-app .card-notes .card-note.selected'),
  noteLength = $('.notes-app .card-notes .card-note.selected').length;
  if ($eachNote.length > 0) {
    $('.notes-app #header_action_bar').addClass('open');
    $('.notes-app #selected_items span').text(`${noteLength} selected`);
  } else {
    $('.notes-app #header_action_bar').removeClass('open');
  }
}
const noteImgUpload = () => {
  $(function() {
    $(":file").change(function() {
      if (this.files && this.files[0]) {
        var reader = new FileReader();
        reader.onload = imageIsLoaded;
        reader.readAsDataURL(this.files[0]);
      }
    });
  });
  function imageIsLoaded(e) {
    $('#notesTempImg').attr('src', e.target.result);
    $('.notesTempImgWrapper').fadeIn();
  };
}
const noteAddList = () => {
  let $add_textarea_wrapper = $('#add_textarea_wrapper'),
  $add_list_wrapper = $('#add_list_wrapper');
  $('a[data-note="list"]').on('click', function(e) {
    if ($add_textarea_wrapper.is(':visible')) {
      $add_textarea_wrapper.hide();
      $add_list_wrapper.show();
    } else {
      $add_textarea_wrapper.show();
      $add_list_wrapper.hide();
    };
  });
  $('#add_list_item_btn').on('click', function() {
    let listItem = $(this).closest('#add_list_wrapper').find('#add_list_item');
    if (listItem.length > 0) {
      $('#add_list_wrapper #add_list').append(`<li><div class="checkbox"><label><input type="checkbox" value="">${listItem.val()}</label></div></li>`);
      $.material.init();
    } else {
    }
  });
  $('#note_form .swatches input').on('click', function() {
    let $noteColorWrapper = $(this).parents('#note-color-wrapper'),
    noteColorSwatch = $(this).val();
    $noteColorWrapper.attr('class', '');
    $noteColorWrapper.addClass(noteColorSwatch);
  });
}
const updateNote = () => {
  $('.card-note .swatches input').on('click', function() {
    let $noteColorWrapper = $(this).parents('div[id*=note_id_]'),
    noteColorSwatch = $(this).val();
    $noteColorWrapper.attr('class', '');
    $noteColorWrapper.addClass(noteColorSwatch);
  });
}
export {
  allNotes,
  notesAdd,
  noteSelected,
  noteImgUpload,
  noteAddList,
  updateNote
}
