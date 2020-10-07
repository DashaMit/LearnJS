console.clear();
function Welcome () {
    let name = 'Иванов Иван';

    this.displayWelcome = function(){
        console.log("Привет " + name );
    }
   
    this.getName = function() {
        return name;
    };
    this.setName = function(you_name) {
            name = you_name;
    }
}

 let new_welcome = new Welcome() 
new_welcome.displayWelcome(); 
console.log(new_welcome.getName()); 
new_welcome.setName("Тестовый Тест");
console.log(new_welcome.getName()); 
new_welcome.displayWelcome();
