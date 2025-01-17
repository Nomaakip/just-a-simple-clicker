let clicks = JSON.parse(localStorage.getItem('clicks'));
no.style.display = 'none';
let switch2 = localStorage.getItem('switch2');
const clicksdisplay = document.getElementById('clicksh1');


if (clicks) {
    clicks = clicks;
}

else {
    clicks = 0;
}

if (switch2) {
    switch2 = switch2;
}

else {
    switch2 = false;
}

clicksdisplay.innerHTML = "Clicks: " + clicks;

function clicked() {
    if (switch2) {
        clicks += 3;
    }

    else {
        clicks++;
    }
    clicksdisplay.innerHTML = "Clicks: " + clicks;
    localStorage.setItem('clicks', JSON.stringify(clicks));
}

function switch22() {
    no.style.display = 'block';
    if (!switch2) {
        if (clicks < 300) {
            document.getElementById('no').innerHTML = 'not enough clicks!';
        }
        else {
            switch2 = true;
            clicks -= 300;
            no.innerHTML = 'Successfully bought!';
        }
    }

    else {
        no.innerHTML = 'already bought!';
    }
    clicksdisplay.innerHTML = "Clicks: " + clicks;
    localStorage.setItem('clicks', JSON.stringify(clicks));
    localStorage.setItem('switch2', switch2);
}

function display() {
    upgradesdiv.style.display = 'flex';
}
