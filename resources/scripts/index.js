function findData(){
    var url = "http://universities.hipolabs.com/search"
    // let searchString = document.getElementById("searchData").value;

    // url += searchString;

    // console.log(searchString)

    fetch(url).then(function(response) {
		console.log(response);
		return response.json();
	}).then(function(json) {
        console.log(json)
        let html = 
        `<table>
        <tr>
            <th>University Name</th>
            <th>Website</th>
        </tr>`;
		json.forEach((university) => {
            console.log(university.name)
            console.log(university.web_pages)
            html += `<div>`;
            html += `<tr>`;
			html += `<td>`+university.name+`</td>`;
			html += `<td>`+university.web_pages+`</td>`;
            html += `</tr>`;
            html += `</div>`;
		});
        html += `</table>`;
		
        // if(html === ``){
        //     html = "No Songs found :("
        // }
		document.getElementById("searchData").innerHTML = html;

	}).catch(function(error) {
		console.log(error);
	})
}