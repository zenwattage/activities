var orm = require("./config/orm.js");

// * Console log all the party names.
orm.selectPartyNames("parties", "party_name",);

// * Console log all the client names.
orm.selectClientNames("parties", "animal_name", "Rachel");

// * Console log all the parties that have a party-type of grown-up.
orm.findGrownUpParty("buyer_name", "buyer_id", "buyers", "pets");

//* Console log all the clients and their parties.
orm.findClientsandParties("client_id", "party_name", )
