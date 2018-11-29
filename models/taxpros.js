// Require mongoose
var mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new TaxProSchema object
// This is similar to a Sequelize model
var TaxProSchema = new Schema({
    // `fName` must be of type String. We "trim" it to remove any trailing white space
    // `fName` is a required field, and a custom error message is thrown if it is not supplied
    fName: {
        type: String,
        trim: true,
        required: "First Name is Required"
    },
    lName: {
        type: String,
        trim: true,
        required: "Last Name is Required"
    },
    middle: {
        type: String,
        trim: true
    },
    // Is a CPA
    cpaDes: Boolean,
    // Is an Enrolled Agent
    eaDes: Boolean,
    // Is a Tax Attorney
    taxAttDes: Boolean,

    //Specify other designation
    otherDesignation: {
        type: String,
        trim: true
    },

    officeAddress: {
        type: String,
        required: "please enter office address"
    },

    officeAddress2: {
        type: String
    },
    officeCity: {
        type: String,
    },
    officeState: {
        type: String,
        max: 2,
    },
    // `zipcode` is of type Number
    // `number` is required. The default mongoose error message is thrown if it is not supplied
    zipcode: {
        type: Number,
        required: true
    },
    // Years in practice
    year: {
        type: Number,
        min: 4,
        max: 4
    },
    // Specializations
    // small business, real estate investor, partnerships, self-employed, earned income credit, high net worth, expat, litigation)


    // `date` must be of type Date. The default value is the current date
    createdDate: {
        type: Date,
        default: Date.now
    }
});

// This creates our model from the above schema, using mongoose's model method
var Example = mongoose.model("TaxPros", TaxProSchema);

// Export the Example model
module.exports = TaxPros;
