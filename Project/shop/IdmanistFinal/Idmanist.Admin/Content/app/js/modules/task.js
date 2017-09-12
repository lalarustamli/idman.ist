import {toggleDrawer} from './drawers';
import {filterList} from './filterList';
const getTaskCardInfo = () => {
  $('.card-task-item').on('click.taskInfo', function(e) {
    let $this = $(this);
    $('#editTaskTitle,#editTaskNotes').editable("destroy");
    $('#task-info-wrapper .card-active .filter_members_list li:not(.filter)').removeClass('active')
    var taskCard = {
      taskCardId: $this.find('[data-task-id]').data('taskId'),
      taskListTitle: $this.parents('.card-lane-wrapper').find('[data-task-title]').data('taskTitle'),
      taskCardColor: $this.parents('.card-lane-wrapper').find('[data-task-color]').data('taskColor'),
      taskCardTitle: $this.find('[data-task="title"]').text(),
      taskCardUsers: $this.find('[data-task="users"] li.list-group-item').clone(),
      taskCardNotes: $this.find('[data-task="notes"]').text().trim(),
      taskCardMetaData: $this.find('[data-task="metadata"]')
    };
    console.log(taskCard.taskListTitle)
    //Remove data
    $('#task-info-wrapper .card-heading .card-number').text('');
    $('#task-info-wrapper .card-body #editTaskTitle').text('');
    $('#task-info-wrapper .card [data-task-color]').removeAttr('class');
    $('#task-info-wrapper .card-body #editTaskNotes').text('');
    $('#task-info-wrapper .editable-inline textarea').val('');
    $('#task-info-wrapper .card-body .user-group > li.list-group-item').remove();
    //Add new data
    $('#task-info-wrapper [data-active-id]').data('activeId',taskCard.taskCardId);
    $('#task-info-wrapper .card-heading .card-number').text(`#${taskCard.taskCardId}`);
    $('#task-info-wrapper .card-heading #taskListTitle').text(taskCard.taskListTitle);
    $('#task-info-wrapper .card [data-task-color]').addClass(taskCard.taskCardColor);
    $('#task-info-wrapper .card-body #editTaskTitle').text(taskCard.taskCardTitle);
    $('#task-info-wrapper .card-body #editTaskNotes').text(taskCard.taskCardNotes);
    $('#task-info-wrapper .card-body .user-group').prepend(taskCard.taskCardUsers);
    editInPlace();
    $('#task-info-wrapper .card-active .user-group > li.list-group-item').each(function(){
      let $this = $(this),
      matchImgSrc = $this.find('img').attr('src');
      $('#task-info-wrapper .card-active .filter_members_list li:not(.filter)').each(function(){
        let imgSrc = $(this).find('img').attr('src');
        if( imgSrc == matchImgSrc){
          $(this).addClass('active');
        }
      });
    });
  });
  $(document).on('click','.editable-submit',function(e){
    let $this = $(this),
    updateTitle = $this.parents('form').find('input.form-control').val(),
    updateNotes = $this.parents('form').find('textarea.form-control').val(),
    activeId = $('#task-info-wrapper').find('[data-active-id]').data('activeId');
    $(`.card-task-item [data-task-id="${activeId}"]`).find('.card-title').text(updateTitle);
    $(`.card-task-item [data-task-id="${activeId}"]`).find('[data-task="notes"]').text(updateNotes);
  });
};
const editInPlace = () =>{
  $.fn.editable.defaults.mode = 'inline'
  $('#editTaskTitle,#editTaskNotes').editable();
  $.fn.editableform.buttons = '<button type="submit" class="btn btn-primary btn-fab btn-fab-xs m-5 editable-submit">' +
  '<i class="mdi mdi-check"></i>' +
  '</button>' +
  '<button type="button" class="btn btn-default btn-fab btn-fab-xs m-5 editable-cancel">' +
  '<i class="mdi mdi-close"></i>' +
  '</button>';
}
const uniqId = () => {
  return Math.floor(Math.random() * 90000) + 10000;
};
const loadTaskId = () => {
  if($('.card-task-item.active').length > 0){
    let getId = uniqId();
    $('.card-task-item.active').find('[data-task-id]').data('taskId', getId);
    $('.card-task-item.active').removeClass('active');
  } else{
    $('div[data-task-id]').each(function() {
      let $cardItem = $(this).parents('.card.card-task-item'),
      getId = uniqId();
      $(this).attr('data-task-id', getId);
      $cardItem.find('.task-number').text(`#${getId}`);
      getTaskCount();
    });
  }
};
const getTaskCount = () => {
  $('.card-lane-wrapper .card-lane').each(function() {
    let recordCount = $(this).find('.card-task-item').length
    $(this).parents('.card-lane-wrapper').find('.count').text(recordCount);
    return recordCount;
  });
};
const addNewTask = () => {
  $('[data-task="add-task"]').on('click', function() {
    let $this = $(this);
    if ($('#addTaskForm').length > 0) {
      $this.attr('disabled', true);
    } else {
      $.get("assets/partials/task/_task-add.html", function(getMarkup) {
        $this.parents('.card-lane-wrapper').find('.card-lane').append(getMarkup).find('.form-control').focus();
        $this.attr('disabled', true);
        cancelTask();
        saveTask();
      });
    }
  });
};
const addNewTaskList = () => {
  //Open "Add a list..."
  $('.card-task.empty').on('click.addNewTaskList',function(){
    let $this = $(this);
    $this.find('.card-body').slideDown();
    $this.removeClass('empty');
  });
  $('.card-task.empty .card-body').on('click.addNewTaskList',function(e){
    //e.stopPropagation();
  });
  //Cancel & Reset "Add a list..."
  $('[data-task="cancel-list"]').on('click',function(e){
    e.stopPropagation();
    let $cardTask = $(this).parents('.card-task');
    $cardTask.find('.card-body').slideUp()
    $cardTask.addClass('empty');
    $cardTask.find(`.swatches [name=swatches][value="bg-white"]`).prop('checked', true);
    $cardTask.find('[data-task-color]').data('taskColor','').attr('class', '');
  });
  //Select a color for "Add a list..."
  $('.card-task .swatches input').on('click', function() {
    let $cardTask = $(this).parents('.card-task'),
    $dataTaskColor = $cardTask.find('[data-task-color]'),
    colorSwatch = $(this).val();
    $dataTaskColor.attr('class', '');
    $dataTaskColor.addClass(colorSwatch);
  });
  $('[data-task="save-task-list"]').on('click',function(e){
    let $cardTask = $(this).parents('.card-task'),
    $cardLaneWrapper = $(this).parents('.card-lane-wrapper'),
    $titleInput = $cardTask.find('#newTaskListInput'),
    $cardTitle = $cardTask.find('.card-title'),
    colorSwatch = $cardTask.find('.swatches input:checked').val(),
    $dataTaskColor = $cardTask.find('[data-task-color]');
    if ($.trim($titleInput.val()) === '') {
      $(this).parents('.form-group').addClass('has-error');
    } else {
      $cardTitle.text($titleInput.val());
      $dataTaskColor.data('taskColor',colorSwatch);
      $cardTask.find('.badge.count').addClass(colorSwatch);
      $cardTask.find('.card-body').remove();
      $cardLaneWrapper.find('.hidden').removeClass('hidden');
    }
  });
}
const saveTask = () => {
  $('[data-task="save-task"]').on('click', function(e) {
    let $cardItem = $(this).parents('.card.card-task-item'),
    title = $cardItem.find('.form-control'),
    addTaskBtn = $cardItem.find('[data-task="add-task"]');
    if ($.trim(title.val()) === '') {
      $(this).parents('.form-group').addClass('has-error');
    } else {
      $cardItem.addClass('active');
      $cardItem.find('.card-title').removeClass('hide').text(title.val());
      $cardItem.find('.card-actions li').removeClass('hide');
      $cardItem.find('#addTaskForm').remove();
      $cardItem.find('[data-task="cancel"]').remove();
      $cardItem.find('[data-drawer="open-right-lg"]').unbind();
      loadTaskId();
      let getElmId = $cardItem.find('[data-task-id]');
      $cardItem.find('.task-number').text(`#${getElmId.data('taskId')}`);
      $cardItem.find('[data-task-id]').attr('data-task-id', getElmId.data('taskId'));
      toggleDrawer();
      $(title).removeClass('has-error');
      $('[data-task="add-task"]').removeAttr('disabled');
      getTaskCardInfo();
      getTaskCount();
    }
    return false;
  });
}
const deleteTask = () => {
  $('[data-task="delete"]').on('click', function(e) {
    e.stopPropagation();
    let $this = $(this);
    setTimeout(function() {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function() {
        $this.parents('.card-task-item').remove();
        $('[data-task="add-task"]').removeAttr('disabled');
        swal('Deleted!', 'Your task has been removed.', 'success');
      })
    }, 250);
  });
};
const cancelTask = () => {
  $('[data-task="cancel"]').on('click', function() {
    $(this).parents('.card.card-task-item').remove();
    $('[data-task="add-task"]').removeAttr('disabled');
  });
};
const editTask = () => {
  $('[data-task="edit-task"]').on('click', function(e) {
    let $this = $(this);
    let cardTitle = $this.parents('.card-task-item').find('.card-title'),
    getTitleText = cardTitle.text();
    $.get("assets/partials/task/_task-edit.html", function(getMarkup) {
      if (!$('#addTaskForm').length > 0) {
        $this.closest('ul').children('li').addClass('hide');
        $(getMarkup).insertAfter(cardTitle);
        let editInput = $this.parents('.card-task-item').find('#addTaskForm #editTaskInput');
        editInput.val(getTitleText);
        cancelTask();
        deleteTask();
        saveTask();
      }
    });
    return false;
  });
};
const filterTaskMembers = () => {
  let filterTaskMembersInput = $('#task-info-wrapper #filter_members_input'),
  filterTaskMembersList = $('#task-info-wrapper .filter_members_list li:not(.filter)');
  filterList(filterTaskMembersInput, filterTaskMembersList);
  //Add users from list
  $('#task-info-wrapper .filter_members_list li:not(.filter)').on('click',function(e){
    let $this = $(this);
    if(!$this.hasClass('active')){
      $this.toggleClass('active');
      let $img = $this.clone().html();
      $this.parents('.user-group').prepend(`<li class="list-group-item">${$img}<a class="remove-guests"><i class="zmdi zmdi-minus-circle"></i></a></li>`);
    }
    //Remove users
    $('#task-info-wrapper .remove-guests').on('click',function(){
      let $this = $(this),
      imgSrc = $this.parent('.list-group-item').find('img').attr('src');
      $('#task-info-wrapper .filter_members_list li:not(.filter)').each(function(){
        let matchImgSrc = $(this).children('img').attr('src');
        if($(this).hasClass('active') && imgSrc === matchImgSrc){
          $this.parent('.list-group-item').fadeOut();
          $(this).removeClass('active');
        }
      });
    });
  });
}
const dragDropTask = () => {
  var drake = dragula({});
  $('.card-lane').each(function() {
    drake.containers.push($(this).get(0));
    drake.on('drag', function(el) {
      el.classList.add('is-moving');
    }).on('dragend', function(el) {
      el.classList.remove('is-moving');
      window.setTimeout(function() {
        el.classList.add('is-moved');
        faded();
      }, 100);
    });
  });
  var faded = () => {
    $('#fadedColor').remove();
    let getColor = $('.is-moved').parents('.card-lane-wrapper').find('[data-task-color]').data('taskColor');
    $('.is-moved').prepend(`<div id="fadedColor" class="${getColor}"></div>`);
    window.setTimeout(function() {
      $('#fadedColor').remove();
      $('.card-task-item').removeClass('is-moved');
      getTaskCount();
    }, 350);
  }
};
export {
  getTaskCardInfo,
  loadTaskId,
  addNewTask,
  addNewTaskList,
  deleteTask,
  editTask,
  filterTaskMembers,
  dragDropTask
}
