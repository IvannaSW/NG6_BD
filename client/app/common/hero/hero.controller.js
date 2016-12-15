
/*import * as firebase from "firebase";
var config = {
    apiKey: "AIzaSyCjhEN9yHOBDoNhM2M8aBFTSVcT87MqE5M",
    authDomain: "myfirstfirebaseapp-fa781.firebaseapp.com",
    databaseURL: "https://myfirstfirebaseapp-fa781.firebaseio.com",
    storageBucket: "myfirstfirebaseapp-fa781.appspot.com",
    messagingSenderId: "1005784677268"
  };
  firebase.initializeApp(config);*/

  class HeroController {
  constructor($scope, $firebaseArray, $firebaseObject) {
    "ngInject";
    this.name = 'hero';
    var vm = this;
    var ref = firebase.database().ref();
    
    vm.data = $firebaseObject(ref);}}

  

export default HeroController;




/*
class HeroController {
  constructor() {
    this.name = 'Data List';
    this.obj = [
      {
        id: "1",
        name: "Ivanna",
        surname: "Savchuk",
        age: 21
      },
      {
        id: "2",
        name: "Svitlana",
        surname: "Rytkina",
        age: 21
      },
      {
        id: "3",
        name: "Yuriy",
        surname: "Kurko",
        age: 22
      },
      {
        id: "4",
        name: "Dmytro",
        surname: "Schebetiuk",
        age: 28
      },
      {
        id: "5",
        name: "Olga",
        surname: "Romaniuk",
        age: 28
      },
    ];
  }
}

export default HeroController;*/