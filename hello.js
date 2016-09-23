function Hello() {
    var name;

    this.setName = function(thyName) {
    name = thyName
    };

    this.sayHello = function(){
        console.;og('Hello' + name);
    };
};

module.exports = Hello;

