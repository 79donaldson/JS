var createCounter = function(countName) {
    var counter = 0

    return {
        increment: function() {
            counter++
        },
        decrement: function() {
            counter--
        },
        getCounter: function() {
            return counter
        }
    }
}

var counterA = createCounter('counter A')
var counterB = createCounter('counter B')

counterA.increment()
counterA.increment()
counterA.increment()

counterB.decrement()
counterB.decrement()



    