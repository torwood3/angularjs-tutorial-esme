
// Un composant est composé d'au moins un template, un fichier HTML, et d'un controlleur, une fonction ou une class

export const hello = {
  template: require('./hello.html'),
  controller() {
    const vm = this;
    vm.myList = [{name: 'Saab'}, {name: 'Volvo'}, {name: 'BMW'}];
  }
};
