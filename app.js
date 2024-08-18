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
        "<span><strong>🌎</strong> " + (jsonData[i].esp === undefined ? "-" : jsonData[i].esp) + "</span><br>" +
        "<span><strong>🇬🇧</strong> " + jsonData[i].eentry + "</span><br>" +
        "<span><strong>def</strong> " + (jsonData[i].tdef === undefined ? "-" : jsonData[i].tdef)  + "</span><br>" +
        "<span><strong>sample</strong> " + (jsonData[i].tsample === undefined ? "-" : jsonData[i].tsample)  + "</span><br>" +
        "<span><strong>syn</strong> " + (jsonData[i].tsyn === undefined ? "-" : jsonData[i].tsyn) + "</span><br>" +
        "<span><strong>ant</strong> " + (jsonData[i].tant === undefined ? "-" : jsonData[i].tant)  + "</span><br>" +
        "<span><strong>notes</strong> " + (jsonData[i].notes === undefined ? "-" : jsonData[i].notes)  + "</span><br><hr>"
        // "<span><strong>ID:</strong> " +  (jsonData[i].id  === undefined ? "-" : jsonData[i].id) + "</span><hr>";
        searchResult.appendChild(div);
      }
      document.getElementById('countWordResult').innerHTML = "ผลลัพท์:" + countWord + "<hr>";
    }
  }