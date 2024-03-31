// Global Var
var errorMessage = undefined;
var hasError = false;

var myElement = function(id) { 
	return document.getElementById(id); 
};

function getLocalStorage() {
    try {
        if (Boolean(window.localStorage)) {
            return window.localStorage;
        } else {
            return undefined;
        }
    } catch (e) {
        return undefined;
    }
}

function getSessionStorage() {
    try {
        if (Boolean(window.sessionStorage)) {
            return window.sessionStorage;
        } else {
            return undefined;
        }
    } catch (e) {
        return undefined;
    }
}

function getOpenDatabase() {
    try {
        if (Boolean(window.openDatabase) ) {
            return window.openDatabase;
        } else {
            return undefined;
        }
    } catch (e) {
        return undefined;
    }
 }

 function getAddEventListener() {
    try {
        if (Boolean(window.addEventListener)) {
            return window.addEventListener;
        }
    } catch (e) {
        return undefined;
    }
 }

function setErrorMessage ( message ) {
    errorMessage = '<div class = "col-12 col-lg-10 col-xl-8 text-center">' + '\n' +
    '<p style=\"color: red;\">' + message + '</p>' + "\n" +
    '</div>';
    hasError = true;
}

function custProgram (wrap) {
    this.wrap = ( wrap == undefined ) ? true : wrap;
    this.records = new Array();

    this.addRecord = function(record) {
        this.records.push(record);
        //console.log("Record pushed!");
        //console.log("It is " + record);
    };

    this.getRecord = function (index) {
        return this.records[index];
    };

    this.countRecords = function () {
        return this.records.length;
    };

    this.genCustProgramDivHTML = function () {
        var addHtml = '';
        if (this.wrap) {
            addHtml += '<div class = "col-12 col-lg-10 col-xl-8">' + '\n';
        }
        for (var record in this.records) {
            addHtml += this.getRecordHTML(this.records[record]);
            //console.log("Yes, I'm here");
            //console.log("Processing");
            //console.log(this.records[record]);
        }
        if (this.wrap) {
            addHtml += '</div>'+ '\n';
        }
        return addHtml;
    };

    this.getRecordHTML = function ( record ) {
        var addHtml = '<div class = "row">' + '\n';
        addHtml += '<div class = "col-3 text-center">' + '\n';
        addHtml += record[0] + '\n';
        addHtml += '</div>' + '\n';
        addHtml += '<div class = "col-7">' + '\n';
        addHtml += '<div class = "row">' + '\n';
        addHtml += '<div class = "col-md-8">' + '\n';
        addHtml += record[1] + '\n';
        addHtml += '</div>' + '\n';
        addHtml += '<div class = "col-md-4">' + '\n';
        addHtml += '<svg width=\"16px\" height=\"16px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M3 21.0001L14 21V5.98924C14 4.6252 14 3.94318 13.7187 3.47045C13.472 3.05596 13.0838 2.74457 12.6257 2.59368C12.1032 2.42159 11.4374 2.56954 10.1058 2.86544L7.50582 3.44322C6.6117 3.64191 6.16464 3.74126 5.83093 3.98167C5.53658 4.19373 5.30545 4.48186 5.1623 4.8152C5 5.19312 5 5.65108 5 6.56702V21.0001M13.994 5.00007H15.8C16.9201 5.00007 17.4802 5.00007 17.908 5.21805C18.2843 5.4098 18.5903 5.71576 18.782 6.09209C19 6.51991 19 7.07996 19 8.20007V21.0001H21M11 12.0001H11.01\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> </svg>' + '\n'
        addHtml += record[2] + '\n';
        addHtml += '</div>' + '\n';
        addHtml += '</div>' + '\n';
        addHtml += '</div>' + '\n';
        addHtml += '<div class = "col-1 text-center">' + '\n';
        addHtml += record[3] + '\n';
        addHtml += '</div>' + '\n';
        addHtml += '</div>' + '\n';
        //addHtml += '</div>' + '\n';

        return addHtml;

        /*
        Warning! Deep Magic!
            for( var cell in row ) { (for int i = 0....)
            var rowNum = row[cell];
            if( rowNum == null) {
				rowNum = '<span class="red">NULL</span>';
			}
            addHtml += '<td>' + rowNum + '</td>';
        }

        */
    };

    this.writeCustProgramDivHTML = function () {
        document.write(this.getCustProgramDivHTML());
    };
}

/*
function show_message ( message ) {
    message = '<div class = "col-12 col-lg-10 col-xl-8 text-center">' + '\n' +
    '<p>' + message + '</p>' + "\n" +
    '</div>';
}
*/
