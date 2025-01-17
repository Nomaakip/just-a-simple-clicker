let clicks = localStorage.getItem('clicks');
const clicksdisplay = document.getElementById('clicksh1');


if (clicks) {
    clicks = clicks;
}

else {
    clicks = 0;
}

clicksdisplay.innerHTML = "Clicks: " + clicks;

function clicked() {
    clicks++;
    clicksdisplay.innerHTML = "Clicks: " + clicks;
    localStorage.setItem('clicks', clicks);
}
