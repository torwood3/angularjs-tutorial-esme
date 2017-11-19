
// Un composant est composé d'au moins un template, un fichier HTML, et d'un controlleur, une fonction ou une class

export const hello = {
  template: require('./hello.html'),
  controller($log) { // Injection de dépendance
    const vm = this;
    vm.handleOnChange = () => {
      $log.log(vm.name);
    };
  }
};
