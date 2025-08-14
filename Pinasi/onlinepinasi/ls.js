function srch() {var input, filter, table, tr, td, i, txtValue;input = document.getElementById("searcttxt");filter = input.value.toUpperCase();if(pagi.checked==true){if(filter ==""){pagination();}else{src();li = document.getElementsByClassName("grid-item");dv = document.getElementsByClassName("difr");for (i = 0; i < l.length; i++) {td = li[i];if (td) {txtValue = td.contentWindow.document.getElementById('bdy').textContent || td.contentWindow.document.getElementById('bdy').innerText;if (txtValue.toUpperCase().indexOf(filter) > -1) {li[i].style.display = "";dv[i].style.display = "";} else {li[i].style.display = "none";dv[i].style.display = "none";}}}}}else{li = document.getElementsByClassName("grid-item");dv = document.getElementsByClassName("difr");for (i = 0; i < l.length; i++) {td = li[i];if (td) {txtValue = td.contentWindow.document.getElementById('bdy').textContent || td.contentWindow.document.getElementById('bdy').innerText ;if (txtValue.toUpperCase().indexOf(filter) > -1) {li[i].style.display = "";dv[i].style.display = "";} else {li[i].style.display = "none";dv[i].style.display = "none";}}}}}function refresh(){location.reload(); }
function srchout(input) {
    var filter, table, tr, td, i, txtValue;filter = input.value.toUpperCase();
    if(pagi.checked==true){if(filter ==""){pagination();}
    else{
        src();
        li = document.getElementsByClassName("grid-item");
        dv = document.getElementsByClassName("difr");
        for (i = 0; i < l.length; i++) {
            td = li[i];if (td) {
                txtValue = td.contentWindow.document.getElementById('bdy').textContent || td.contentWindow.document.getElementById('bdy').innerText ;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";dv[i].style.display = "";
                } else {li[i].style.display = "none";dv[i].style.display = "none";}}}}}else{
                    dv = document.getElementsByClassName("difr");
                    li = document.getElementsByClassName("grid-item");for (i = 0; i < l.length; i++) {td = li[i];if (td) {txtValue = td.contentWindow.document.getElementById('bdy').textContent || td.contentWindow.document.getElementById('bdy').innerText ;if (txtValue.toUpperCase().indexOf(filter) > -1) {li[i].style.display = "";dv[i].style.display = "";} else {li[i].style.display = "none";dv[i].style.display = "none";}}}} }
