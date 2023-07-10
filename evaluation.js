// ii = 736 for course
// 8 loops

// 1053 for teachers
// 15 loops


ii = 1053; 
txt = 296; 
for (let i = 0; i<= 15; i++) {
	console.log(ii); 
	document.getElementById("rdo" + ii).checked = true; 
	ii += 5;
} 
for (i = 0; i <=1; i++) {
	document.getElementById("txt" + txt).value = "-"; 
	txt += 1;
}
