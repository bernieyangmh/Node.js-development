function Hello() {
    var name;

    this.setname = function(thyName) {
        name = thyname;
    }
    this.sayHello = function() {
        console.log('Hello' + name);
    };
};

exports.Hello = Hello