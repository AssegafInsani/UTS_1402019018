var ans = new Array;
var done = new Array;
var score = 0;
ans[1] = "a";
ans[2] = "d";
ans[3] = "d";
ans[4] = "a";
ans[5] = "b";
 
function periksa(question, answer) {
	if (answer != ans[question]) {
		if (!done[question]) {
			done[question] = -1;
		}
	}
	else {
		if (!done[question]) {
			done[question] = -1;
			score++;
		}
   }
}

function submit() {
	if (score == 5) {
		alert("Anda mendapatkan nilai sempurna! dengan score: " + score);
	}
	else if (score == 4) {
		alert("Anda mendapat nilai lumayan! dengan score: " + score)
	}
	else {
		alert("Yah... Nilai anda kurang! dengan score: " + score)
   }
}

