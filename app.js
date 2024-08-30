  //premi Enter por ekserĉi.
  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      search()
    }
  });
  
  // Function to search and display results
  function search() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var searchResult = document.getElementById("searchResult");
    searchResult.innerHTML = "";
    if (searchInput === "") {
      searchResult.innerHTML = "";
      document.getElementById('countWordResult').innerHTML = "";
      alert("no word!")
      return ;
    }
    let countWord = 0
    for (var i = 0; i < jsonData.length; i++) {
      if (jsonData[i].tentry.includes(searchInput)) {
        countWord++
        var div = document.createElement("div");
        div.innerHTML = "<span class=\"bold\"><u>" + jsonData[i].tsearch + "</u></span>" +
        " <span><i>(" + jsonData[i].tcat + ")</i></span><br>" +
        // "<span><strong>🌎</strong> " + (jsonData[i].esp === undefined ? "-" : jsonData[i].esp) + "</span><br>" +
        "<span><strong>🇬🇧</strong> " + jsonData[i].eentry + "</span><br>" +
        "<span><strong>def</strong> " + (jsonData[i].tdef === undefined ? "-" : jsonData[i].tdef)  + "</span><br>" +
        "<span><strong>sample</strong> " + (jsonData[i].tsample === undefined ? "-" : jsonData[i].tsample)  + "</span><br>" +
        "<span><strong>syn</strong> " + (jsonData[i].tsyn === undefined ? "-" : jsonData[i].tsyn) + "</span><br>" +
        "<span><strong>ant</strong> " + (jsonData[i].tant === undefined ? "-" : jsonData[i].tant)  + "</span><br>" +
        "<span><strong>notes</strong> " + (jsonData[i].notes === undefined ? "-" : jsonData[i].notes)  + "</span><br><hr>"
        // "<span><strong>ID:</strong> " +  (jsonData[i].id  === undefined ? "-" : jsonData[i].id) + "</span><hr>";
        console.log(jsonData[i].eentry); 
        searchResult.appendChild(div);
      }
      // document.getElementById("liveSearch").innerHTML = ""
      document.getElementById('countWordResult').innerHTML = "ผลลัพท์:" + countWord + "<hr>";
    }
  }

  // for (let i = 0; i < jsonData.length; i++) {
  //   const tw = jsonData[i].tentry;
  //   const ew = jsonData[i].eentry;
  //   console.log(tw,ew,jsonData.length, i);
  //   document.getElementById("e").innerHTML += tw + " : " + ew + ","
  // }

  function liveSearch(thaiW) {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var searchResult = document.getElementById("searchResult");
    if (searchInput === "") {
      searchResult.innerHTML = ""
    }
    // console.log(thaiWord);
    const THAI_WORDS = thaiWord.split("\n")
    // console.log(thaiW);
    if (thaiW.length > 1) {
      let PATTERN = new RegExp(`(${(thaiW)})`, "gm");
      let RESULTS = THAI_WORDS.filter(function(str) {
        return PATTERN.test(str);
      });
      // RESULTS.push("<hr>")
      // console.log(RESULTS);
      let results = RESULTS.toString()
      .replace(/,/g, "<hr>")
      .replace(/([ก-๙]*) : ([A-Za-z \(\)\'\"]*)/g, "<span onclick=\"letSearch(this)\">$1</span> : <span onclick=\"letSearchEo(this)\">$2</span>")
      // .replace(/([ก-๙]*)$/g, "<span onclick=\"letSearch(this)\">$1</span>")
      // console.log(results);

      document.getElementById("liveSearch").innerHTML = results 
    } else {
      document.getElementById("liveSearch").innerHTML = ""
    }
  } 

function letSearch(word) {
  document.getElementById("searchInput").value = word.innerText
  // document.getElementById("liveSearch").innerHTML = ""
  search() 
}

let espdicWord;
function letSearchEo(engWord) {
  espdicWord = " " + engWord.innerHTML
  searchEspdic()
}

function searchEspdic() {
  const ESPDIC = espDic.split("\n")
  // console.log(ESPDIC);
      let PATTERN = new RegExp(`(${(espdicWord)})`, "g");
      let PATTERN_NOSPACE = new RegExp(`(${(espdicWord.substring(1))})`, "g");
      console.log(PATTERN);
      let ESPDIC_RESULTS = ESPDIC.filter(function(str) {
        return PATTERN.test(str);
      });
      let espdicResult = ESPDIC_RESULTS.join("+").toString()
      .replace(/\+/g, "<hr>")
      .replace(PATTERN_NOSPACE, "<u>$1</u>")
      document.getElementById("searchResult").innerHTML = ""
      document.getElementById("searchResult").innerHTML = espdicResult

} 
