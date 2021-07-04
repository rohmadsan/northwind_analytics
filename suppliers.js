function transform(line) {
var values = line.split('|');

var obj = new Object();
obj.supplierid = values[0];
obj.companyname = values[1];
obj.contactname = values[2];
obj.contacttitle = values[3];
obj.address = values[4];
obj.city = values[5];
obj.region = values[6];
obj.postalcode = values[7];
obj.country = values[8];
obj.phone = values[9];
obj.fax = values[10];
obj.homepage = values[11];
var jsonString = JSON.stringify(obj);

return jsonString;
}