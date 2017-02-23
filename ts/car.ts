/**
 * This class saves all the information about an engine.
 */
class Engine {

    /**
     * Creates an engine with two attributes.
     * @param horsePower (number) 
     * @param engineType (string)
     */
    constructor(public horsePower: number, public engineType: string) {
        /* If we dont put any assigment in a public attribute, 
           the traspiler (in this case ES5) made for us in our js file
        */
     }
}


/**
 * This class saves all the information about a car.
 */
class Car {

    //Attributes
    private _engine: Engine;

    /** 
     * Creates a new car with a specific engine.
     * @param engine (Engine)
     */
    constructor(engine: Engine) {
        this._engine = engine;
    }

    //### Methods ###
    
    /**
     * Return the engine 
     */
    get engine(): Engine {
        return this._engine;
    }

    /**
     * Set a specific engine.
     * @param value (Engine)
     */
     set engine(value: Engine) {
        if(value === undefined) throw 'Please supply an engine';
        this._engine = value;
     }

    /**
     * Launches a message with the engine starting.
     */
    start(): void {
        alert('Car engine started ' + this._engine.engineType);
    }
}

//When the navigator loads
 window.onload = function () {

    //Creates two objects
    var engine = new Engine(300, 'V8');
    var car = new Car(engine);

    //Call the methods
    car.start();
}