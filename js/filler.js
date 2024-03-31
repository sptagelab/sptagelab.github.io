async function loadDataFiles() {
    // Load Intro
    requestIntro().then(requestedIntroXML => {
        fillIntro(requestedIntroXML);
    }, reject => {return requestInstitute()})

    // Load News
    requestNews().then(requestedNewsXML => {
        fillNews(requestedNewsXML);
    }, reject => {return requestNews()})

    // Load People
    requestPeople().then(requestedPeopleXML => {
        fillPeople(requestedPeopleXML);
    }, reject => {return requestPeople()})

    // Load Works
    requestWork().then(requestedWorkXML => {
        fillWorks(requestedWorkXML);
    }, reject => {return requestWork()})

    // Load Events
    requestEvent().then(requestedEventXML => {
        fillEvents(requestedEventXML);
    }, reject => {return requestEvent()})

    // Load Footer
    requestFooter().then(requestedFooterXML => {
        fillFooter(requestedFooterXML);
    }, reject => {return requestFooter()})

}

function requestIntro() {
    return new Promise((resolve, reject) => {
        let introRequest = new XMLHttpRequest();
        introRequest.open("GET", "data/intro.xml?ver=" + getTodayISODateString());
        introRequest.send();
        introRequest.onload = () => resolve(introRequest);
        introRequest.onerror = reject;
    })
}

function fillIntro(xmlResponse) {
    let introFile = xmlResponse.responseXML;
    let introRecord = introFile.getElementsByTagName("intro")[0].childNodes[0].nodeValue;
    document.getElementById("intro").innerHTML = introRecord;
}

function requestEvent() {
    return new Promise((resolve, reject) => {
        let eventRequest = new XMLHttpRequest();
        eventRequest.open("GET", "data/events.xml?ver=" + getTodayISODateString());
        eventRequest.send();
        eventRequest.onload = () => resolve(eventRequest);
        eventRequest.onerror = reject;
    })
}

function fillEvents(xmlResponse) {
    let eventFile = xmlResponse.responseXML;
    let eventRecords = eventFile.getElementsByTagName("event");
    let eventsHTML = '';
    for (let i = 0; i < eventRecords.length; i++) {
        eventsHTML += drawEvent(eventRecords[i]);
    }
    document.getElementById("eventInfo").innerHTML = eventsHTML;
}

function drawEvent(eventRecord) {
    let eventHTML = '';
    eventHTML += '<tr>';
    eventHTML += '<td>';
    if (eventRecord.getElementsByTagName("url").length > 0) {
        if (eventRecord.getElementsByTagName("url")[0].childNodes[0].nodeValue.length > 0) {
            eventHTML += '<a href="';
            eventHTML += eventRecord.getElementsByTagName("url")[0].childNodes[0].nodeValue;
            eventHTML += '">';
            eventHTML += eventRecord.getElementsByTagName("title")[0].childNodes[0].nodeValue;
            eventHTML += '</a>';
        } else {
            eventHTML += eventRecord.getElementsByTagName("title")[0].childNodes[0].nodeValue;
        }
    } else {
        eventHTML += eventRecord.getElementsByTagName("title")[0].childNodes[0].nodeValue;
    }
    eventHTML += '</td>';
    eventHTML += '<td>';
    eventHTML += eventRecord.getElementsByTagName("type")[0].childNodes[0].nodeValue;
    eventHTML += '</td>';
    eventHTML += '<td>';
    eventHTML += eventRecord.getElementsByTagName("location")[0].childNodes[0].nodeValue;
    eventHTML += '</td>';
    eventHTML += '<td>';
    eventHTML += eventRecord.getElementsByTagName("date")[0].childNodes[0].nodeValue;
    eventHTML += '</td>';
    eventHTML += '<td>';
    if (eventRecord.getElementsByTagName("desc").length > 0) {
        if (eventRecord.getElementsByTagName("desc")[0].childNodes[0].nodeValue.length > 0) {
            eventHTML += eventRecord.getElementsByTagName("desc")[0].childNodes[0].nodeValue;
        }
    }
    eventHTML += '</td>';
    eventHTML += '</tr>';
    return eventHTML;
}

function requestPeople() {
    return new Promise((resolve, reject) => {
        let peopleRequest = new XMLHttpRequest();
        peopleRequest.open("GET", "data/people.xml?ver=" + getTodayISODateString());
        peopleRequest.send();
        peopleRequest.onload = () => resolve(peopleRequest);
        peopleRequest.onerror = reject;
    })
}

function fillPeople(xmlResponse) {
    let peopleFile = xmlResponse.responseXML;
    let facultyFile = peopleFile.getElementsByTagName("faculty");
    let phdFile = peopleFile.getElementsByTagName("phd");
    let postdocFile = peopleFile.getElementsByTagName("postdoc");
    let masterFile = peopleFile.getElementsByTagName("master");
    let bachelorFile = peopleFile.getElementsByTagName("bachelor");
    let awardFile = peopleFile.getElementsByTagName("award");
    fillFaculties(facultyFile);
    fillPhds(phdFile);
    fillPostdocs(postdocFile);
    fillMasters(masterFile);
    fillBachelors(bachelorFile);
    fillAwards(awardFile);
}

function fillFaculties(facultyRecords) {
    if (facultyRecords.length > 0) {
        let facultiesHTML = "";
        for (let i = 0; i < facultyRecords.length; i++) {
            facultiesHTML += drawFacultyItem(facultyRecords[i]);
        }
        document.getElementById("instructors").innerHTML = facultiesHTML;
    }
}

function fillPhds(phdRecords) {
    if (phdRecords.length > 0) {
        let phdsHTML = "";
        for (let i = 0; i < phdRecords.length; i++) {
            phdsHTML += drawPeopleItem(phdRecords[i]);
        }
        document.getElementById("phds").innerHTML = phdsHTML;
    }
}

function fillPostdocs(postdocsRecords) {
    if (postdocsRecords.length > 0) {
        let postdocsHTML = "";
        for (let i = 0; i < postdocsRecords.length; i++) {
            postdocsHTML += drawPeopleItem(postdocsRecords[i]);
        }
        document.getElementById("postdocs").innerHTML = postdocsHTML;
    }
}

function fillMasters(masterRecords) {
    if (masterRecords.length > 0) {
        let mastersHTML = "";
        for (let i = 0; i < masterRecords.length; i++) {
            mastersHTML += drawPeopleItem(masterRecords[i]);
        }
        document.getElementById("masters").innerHTML = mastersHTML;
    }

}

function fillBachelors(bachelorRecords) {
    if (bachelorRecords.length > 0) {
        let bachelorsHTML = "";
        for (let i = 0; i < bachelorRecords.length; i++) {
            bachelorsHTML += drawPeopleItem(bachelorRecords[i]);
        }
        document.getElementById("bachelors").innerHTML = bachelorsHTML;
    }
}

function fillAwards(awardRecords) {
    if (awardRecords.length > 0) {
        let awardsHTML = "";
        for (let i = 0; i < awardRecords.length; i++) {
            awardsHTML += (drawPeopleItem(awardRecords[i])).substring(0, (drawPeopleItem(awardRecords[i])).length - 4);
        }
        document.getElementById("awards").innerHTML = awardsHTML;
    }
}

function drawFacultyItem(facultyRecord) {
    let facultyHTML = "";
    facultyHTML += '<tbody>';
    facultyHTML += '<tr>';
    facultyHTML += '<td valign="top">';
    facultyHTML += '<img alt="';
    facultyHTML += facultyRecord.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    facultyHTML += '" border="1" hspace="4" src="';
    facultyHTML += facultyRecord.getElementsByTagName("img")[0].childNodes[0].nodeValue;
    facultyHTML += '" vspace="5" width="130"';
    facultyHTML += '</td>';
    facultyHTML += '<td>';
    facultyHTML += '<font size="+0"><strong>';
    facultyHTML += facultyRecord.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    facultyHTML += '<br></strong></font>';
    facultyHTML += facultyRecord.getElementsByTagName("position")[0].childNodes[0].nodeValue;
    facultyHTML += '<hr noshade="noshade">';
    facultyHTML += facultyRecord.getElementsByTagName("desc")[0].childNodes[0].nodeValue;
    facultyHTML += '</td>';
    facultyHTML += '</tr>';
    facultyHTML += '</tbody>';
    return facultyHTML;
}

function drawPeopleItem(peopleRecord) {
    let peopleHTML = "";
    if (peopleRecord.getElementsByTagName("url").length > 0) {
        if (peopleRecord.getElementsByTagName("url")[0].childNodes[0].nodeValue.length > 0) {
            peopleHTML += '<a target="_blank" href="';
            peopleHTML += peopleRecord.getElementsByTagName("url")[0].childNodes[0].nodeValue;
            peopleHTML += '"><u>';
            peopleHTML += peopleRecord.getElementsByTagName("name")[0].childNodes[0].nodeValue;
            peopleHTML += '</u></a>';
        } else {
            peopleHTML += '<u>';
            peopleHTML += peopleRecord.getElementsByTagName("name")[0].childNodes[0].nodeValue;
            peopleHTML += '</u>'
        }
    } else {
        peopleHTML += '<u>';
        peopleHTML += peopleRecord.getElementsByTagName("name")[0].childNodes[0].nodeValue;
        peopleHTML += '</u>'
    }

    if (peopleRecord.getElementsByTagName("duration").length > 0) {
        peopleHTML += ' [';
        peopleHTML += peopleRecord.getElementsByTagName("duration")[0].childNodes[0].nodeValue;
        peopleHTML += '] <br>';
    } else {
        peopleHTML += '<br>';
    }
    
    if (peopleRecord.getElementsByTagName("project").length > 0) {
        for (let i = 0; i < peopleRecord.getElementsByTagName("project").length; i++) {
            peopleHTML += '<b>Project: </b>';
            peopleHTML += peopleRecord.getElementsByTagName("project")[i].childNodes[0].nodeValue;
            peopleHTML += '<br>'
        }
    }

    if (peopleRecord.getElementsByTagName("interest").length > 0) {
        peopleHTML += '<b>Research Interest: ';
        peopleHTML += peopleRecord.getElementsByTagName("interest")[0].childNodes[0].nodeValue;
        peopleHTML += '</b><br>';
    }

    if (peopleRecord.getElementsByTagName("special").length > 0) {
        for (let i = 0; i < peopleRecord.getElementsByTagName("special").length; i++) {
            peopleHTML += '<b>Special Project/Course: </b>';
            peopleHTML += peopleRecord.getElementsByTagName("special")[i].childNodes[0].nodeValue;
            peopleHTML += '<br>'
        }
    }

    if (peopleRecord.getElementsByTagName("addendum").length > 0) {
        for (let i = 0; i < peopleRecord.getElementsByTagName("addendum").length; i++) {
            peopleHTML += peopleRecord.getElementsByTagName("addendum")[i].childNodes[0].nodeValue;
            peopleHTML += '<br>'
        }
    }
    peopleHTML += '<br>';
    return peopleHTML;
}

function requestWork() {
    return new Promise((resolve, reject) => {
        let workRequest = new XMLHttpRequest();
        workRequest.open("GET", "data/works.xml?ver=" + getTodayISODateString());
        workRequest.send();
        workRequest.onload = () => resolve(workRequest);
        workRequest.onerror = reject;
    })
}

function fillWorks(xmlResponse){
    let workFile = xmlResponse.responseXML;
    let workRecords = workFile.getElementsByTagName("work");
    let addHTML = "";
    for (let i = 0; i < workRecords.length; i++) {
        addHTML += drawWorkItem(workRecords[i]);
    }
    document.getElementById("workInfo").innerHTML = addHTML;
    //console.log(addHTML);
}

function drawWorkItem(workRecord) {
    let workHTML = "";
    workHTML += '<tr class="lead">';
    workHTML += '<td>';
    workHTML += '<img src="';
    if (workRecord.getElementsByTagName("img").length > 0) {
        if (workRecord.getElementsByTagName("img")[0].childNodes[0].nodeValue.length > 0) {
            workHTML += workRecord.getElementsByTagName("img")[0].childNodes[0].nodeValue;
        } else {
            workHTML += "img/general/noimg.png";
        }
    } else {
        workHTML += "img/general/noimg.png";
    }
    workHTML += '" class="img-journal">';
    workHTML += '</td>';
    workHTML += '<td>';
    workHTML += workRecord.getElementsByTagName("title")[0].childNodes[0].nodeValue;
    workHTML += '<br>';
    if (workRecord.getElementsByTagName("desc").length > 0) {
        if (workRecord.getElementsByTagName("desc")[0].childNodes[0].nodeValue.length > 0) {
            workHTML += workRecord.getElementsByTagName("desc")[0].childNodes[0].nodeValue;
            workHTML += '<br>';
        } 
    }
    if (workRecord.getElementsByTagName("button").length > 0) {
        let workButtons = workRecord.getElementsByTagName("button");
        for (let i = 0; i < workButtons.length; i++) {
            workHTML += '<a href="';
            workHTML += workButtons[i].getElementsByTagName("button_url")[0].childNodes[0].nodeValue;
            workHTML += '" class="btn btn-default btn-custom btn-size" target="_blank">';
            workHTML += workButtons[i].getElementsByTagName("button_text")[0].childNodes[0].nodeValue;
            workHTML += '</a>';
            workHTML += '&nbsp;';
        }
    }
    workHTML += '</td>';
    workHTML += '</tr>';
    return workHTML;

    /*
    <!--
        <tr class="lead">
        <td>
            <img src="img/works/blockchain.jpg" class="img-journal">
        </td>
        <td>
            <strong>DevLeChain: A Blockchain Development Platform for Researchers and Educators</strong><br>
            (IEEE Blockchain 2022)<br>
            Put Blockchain Technology Application and Development at Ease<br>
            <a href="https://sptagelab.github.io/DevLeChain" class="btn btn-default btn-custom btn-size" target="_blank">DevLeChain Dowload</a>
            <a href=" " class="btn btn-default btn-custom btn-size" target="_blank">IEEE Blockchain 2022 Paper</a>
        </td>
        </tr>
    -->
     */
}

function requestNews() {
    return new Promise((resolve, reject) => {
        let newsRequest = new XMLHttpRequest();
        newsRequest.open("GET", "data/news.xml?ver=" + getTodayISODateString());
        newsRequest.send();
        newsRequest.onload = () => resolve(newsRequest);
        newsRequest.onerror = reject;
    })
}

function fillNews(xmlResponse) {
    let newsFile = xmlResponse.responseXML;
    let newsRecords = newsFile.getElementsByTagName("news");
    let addHTML = "<table>";
    for (let i = 0; i < newsRecords.length; i++) {
        addHTML += drawNewsItem(newsRecords[i]);
    }
    addHTML += "</table>"
    document.getElementById("news").innerHTML = addHTML;
}

function drawNewsItem(newsRecord) {
    let recordHTML = "";
    let recordTime = new Date(new Date(newsRecord.getElementsByTagName("date")[0].childNodes[0].nodeValue));
    recordHTML += '<tr style="border-bottom: 1pt solid black;">';
    recordHTML += '<td width="15%">';
    recordHTML += getMonthName(recordTime.getMonth()) + ' ' + recordTime.getFullYear();
    recordHTML += '</td>';
    recordHTML += '<td>';
    recordHTML += newsRecord.getElementsByTagName("content")[0].childNodes[0].nodeValue;
    recordHTML += '</td>';
    recordHTML += '</tr>';
    return recordHTML;
    /*
    <div class = "row">
        <div class = "col-3">
        </div>
        <div class = "col-9">
        </div>
    </div>
     */

}

function requestFooter() {
    return new Promise((resolve, reject) => {
        let footerRequest = new XMLHttpRequest();
        footerRequest.open("GET", "data/footer.xml?ver=" + getTodayISODateString());
        footerRequest.send();
        footerRequest.onload = () => resolve(footerRequest);
        footerRequest.onerror = reject;
    })
}

function fillFooter(xmlResponse) {
    let footerFile = xmlResponse.responseXML;
    let footerRecords = footerFile.getElementsByTagName("relatedGroup");
    let addHTML = "";
    for (let i = 0; i < footerRecords.length; i++) {
        addHTML += drawFooterItem(footerRecords[i]);
    }
    document.getElementById("footer").innerHTML = addHTML;
}

function drawFooterItem(footerRecord) {
    let footerHTML = "";
    footerHTML += '<a target="_blank" href="';
    footerHTML += footerRecord.getElementsByTagName("url")[0].childNodes[0].nodeValue;
    footerHTML += '"><img src="';
    footerHTML += footerRecord.getElementsByTagName("img")[0].childNodes[0].nodeValue;
    footerHTML += '" alt="';
    footerHTML += footerRecord.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    footerHTML += '" class="img-sponsor" style="width:auto;height:87px;margin:5px 0 0 20px;"></a>';
    return footerHTML;
}


function getTodayISODateString()
{
    const d = new Date();
    return d.toISOString().substring(0, 10);
}

function getMonthName(month) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames[month];
}

/* Script Entry Point */
loadDataFiles();