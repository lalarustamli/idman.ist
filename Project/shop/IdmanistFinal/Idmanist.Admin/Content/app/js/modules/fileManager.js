const selectedItem = () => {
  let card = {
    $item: $('.file-manager .card-item'),
    dataItemSelected: 'item-selected',
    dataItemType: 'item-type',
    dataItemSize: 'item-size',
    dataItemLocation: 'item-location',
    dataItemModified: 'item-modified',
    dataItemOpened: 'item-opened',
    dataItemCreated: 'item-created',
    dataItemOffline: 'item-offline',
    dataItemImage: 'item-image'
  };
  let itemPanel = {
    $itemImage: $('.item-panel #current-img'),
    $toggleOffline: $('.item-panel #toggle-offline'),
    $itemHeaderTitle: $('.item-panel #item-title .title'),
    $itemHeaderIcon: $('.item-panel #item-title i'),
    $itemType_titleInfo: $('.item-panel #item-details #type .info'),
    $itemLocation_titleInfo: $('.item-panel #item-details #location .info'),
    $itemModified_titleInfo: $('.item-panel #item-details #modified .info'),
    $itemOpened_titleInfo: $('.item-panel #item-details #opened .info'),
    $itemCreated_titleInfo: $('.item-panel #item-details #created .info'),
    $showAllFiles: $('[data-files="show-all"]')
  };
  //Get Initial Selected Data Attributes
  card.$item.each(function() {
    if ($(this).data(card.dataItemSelected) == true) {
      itemPanel.$itemType_titleInfo.text($(this).data(card.dataItemType));
      itemPanel.$itemLocation_titleInfo.text($(this).data(card.dataItemLocation));
      itemPanel.$itemModified_titleInfo.text($(this).data(card.dataItemModified));
      itemPanel.$itemOpened_titleInfo.text($(this).data(card.dataItemOpened));
      itemPanel.$itemCreated_titleInfo.text($(this).data(card.dataItemCreated));
      if ($(this).data(card.dataItemType) == 'Folder') {
        let folderName = card.$item.find('.title').text();
        itemPanel.$itemHeaderTitle.text(folderName);
        itemPanel.$itemHeaderIcon.removeAttr('class');
        itemPanel.$itemHeaderIcon.addClass('zmdi zmdi-folder md-text-amber');
      } else if ($(this).data(card.dataItemType) == 'Image') {
        let currImage = $(this).data(card.dataItemImage);
        var fileNameIndex = currImage.lastIndexOf("/") + 1;
        var filename = currImage.substr(fileNameIndex);
        itemPanel.$itemHeaderIcon.removeAttr('class');
        itemPanel.$itemHeaderIcon.addClass('zmdi zmdi-image mw-blue-text ');
        itemPanel.$itemHeaderTitle.text(filename);
        itemPanel.$itemImage.append(`<img src="${currImage}" />`)
      }
      if ($(this).data(card.dataItemOffline) == true) {
        itemPanel.$toggleOffline.attr('Checked', 'Checked');
      } else {
        itemPanel.$toggleOffline.removeAttr('Checked');
      }
    }
  });
  card.$item.on('click', function(event) {
    event.stopPropagation();
    //Remove Selected
    card.$item.data('itemSelected', 'false');
    card.$item.removeClass('selected');
    //Add Selected
    $(this).data('itemSelected', 'true');
    $(this).addClass('selected');
    //Selected Data Attributes
    itemPanel.$itemType_titleInfo.text($(this).data(card.dataItemType));
    itemPanel.$itemLocation_titleInfo.text($(this).data(card.dataItemLocation));
    itemPanel.$itemModified_titleInfo.text($(this).data(card.dataItemModified));
    itemPanel.$itemOpened_titleInfo.text($(this).data(card.dataItemOpened));
    itemPanel.$itemCreated_titleInfo.text($(this).data(card.dataItemCreated));
    if ($(this).data(card.dataItemType) == 'Folder') {
      let currImage = $(this).data(card.dataItemImage);
      let folderName = $(this).find('.title').text();
      itemPanel.$itemHeaderIcon.removeAttr('class');
      itemPanel.$itemHeaderIcon.addClass('zmdi zmdi-folder md-text-amber');
      itemPanel.$itemHeaderTitle.text(folderName);
      itemPanel.$itemImage.empty();
      itemPanel.$itemImage.append(`<i class="zmdi zmdi-folder md-text-amber"></i>`)
    } else if ($(this).data(card.dataItemType) == 'Image') {
      let currImage = $(this).data(card.dataItemImage);
      var fileNameIndex = currImage.lastIndexOf("/") + 1;
      var filename = currImage.substr(fileNameIndex);
      itemPanel.$itemHeaderIcon.removeAttr('class');
      itemPanel.$itemHeaderIcon.addClass('zmdi zmdi-image mw-blue-text ');
      itemPanel.$itemHeaderTitle.text(filename);
      itemPanel.$itemImage.empty();
      itemPanel.$itemImage.append(`<img src="${currImage}" />`)
    }
    if ($(this).data(card.dataItemOffline) == true) {
      itemPanel.$toggleOffline.attr('Checked', 'Checked');
    } else {
      itemPanel.$toggleOffline.removeAttr('Checked');
    };
  });
  itemPanel.$showAllFiles.on('click', function(event) {
      event.stopPropagation();
      let $card = $(this).parents('.card'),
          $fileActivity = $card.find('.file-activity');
         $fileActivity.toggleClass('show-all')
});
};
export {selectedItem}
