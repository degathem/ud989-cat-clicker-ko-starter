var ViewModel = function (){
  this.name = ko.observable('Tabby');
  this.clickCount = ko.observable(0);
  this.imgSrc = ko.observable('img/1413379559_412a540d29_z.jpg');
  this.imgAttribution = ko.observable('some guy');

  this.incrementCounter = function () {}
}

ko.applyBindings(new ViewModel());
