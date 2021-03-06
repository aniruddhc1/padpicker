function pick(success, failure) {
  filepicker.pick({
      mimetypes: ['text/*'],
      //services:['COMPUTER', 'GMAIL', 'BOX', 'DROPBOX', 'GITHUB'],
    },
    function(FPFile){
      console.log(JSON.stringify(FPFile));
      success(FPFile);
    },
    function(FPError){
      console.log(FPError.toString());
      failure(FPError);
    }
  );
}

$(document).ready(function () {
  var chooseAFileButton = $('#choose-a-file-btn');
  var pickError = $('#pick-error');
  var modal = $('#get-started-modal');

  pickError.hide();

  chooseAFileButton.click(function () {
    pick(function (file) {
      $(document).trigger('file-picked', file);
    }, function (error) {
      pickError.show();
    });
  });

  $(document).on('file-picked', function (data, file) {
    modal.modal('hide');
  });

  $(document).on('show-welcome', function () {
    modal.modal('show');
  });

  //$(document).trigger('show-welcome');
});
