class MainCtrl {
  constructor(
    private $scope: ng.IScope,
    private $mdSidenav: ng.material.ISidenavService,
    private $location: ng.ILocationService
  ) {
    this.$scope.$on('update-theme', (event, args) => {
      this.currentTheme = args;
    });
  }

  $onInit() {}

  currentTheme = 'blue';
  date1 = new Date().toISOString();
  date2 = new Date().toISOString();

  menu = [
    { link: 'home', title: 'Home', icon: 'home' },
    { link: 'settings', title: 'Settings', icon: 'settings' },
  ];

  toggleNav() {
    this.$mdSidenav('left').toggle();
  }

  openNav() {
    this.$mdSidenav('left').open();
  }

  closeNav() {
    this.$mdSidenav('left').close();
  }

  goTo(link: string) {
    this.$mdSidenav('left').close();
    this.$location.path(link);
  }

  isIsoDate(str) {
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) return false;
    const d = new Date(str);
    return d.toISOString()===str;
  }

  callback() {
    this.date1 = this.isIsoDate(this.date1) ? this.date1 : new Date(this.date1).toISOString();
    this.date2 = this.isIsoDate(this.date2) ? this.date2 : new Date(this.date2).toISOString();
  }
}

MainCtrl.$inject = ['$scope', '$mdSidenav', '$location'];

export default {
  bindings: { title: '=' },
  templateUrl: require('./main.html'),
  controller: MainCtrl,
};
