function createCustomerID(name, id) {
    var customerID = name + " " + id;
    return customerID;
}
var myID = createCustomerID("Ann", 10);
console.log(myID);
var IDGenerator = function (name, id) { return name + " " + id; };
console.log(IDGenerator("Ann", 10));
