let gregg = localStorage.getItem('gregg');
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
    y2div.style.display = 'flex';
}

else {
    switch2 = false;
}

if (gregg) {
    gregg = gregg;
    g2div.style.display = 'flex';
    document.body.style.backgroundImage = "url('https://www.greg.com/images/resized_and_crop/250/200/eyJpZCI6IjgzYWU3NjQ2YjljYWZkYjBiYjAzY2MwY2U2Y2E3NmVmIiwic3RvcmFnZSI6InN0b3JlIn0?signature=87f4495c39748e4459b4f3ad69f5843a9acc005e7b3baa33ccad7d6e47f198dd')";
    document.getElementById("clicksh1").style.color = '#ffff';
    document.getElementById("upgrades").style.color = '#ffff';
}

else {
    gregg = false;
}

clicksdisplay.innerHTML = "Clicks: " + clicks;

function clicked() {
    if (gregg) {
        clicks += 9;
    }

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
            y2div.style.display = 'flex';
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

function gregbuy() {
    no.style.display = 'block';
    if (!gregg) {
        if (clicks < 1500) {
            document.getElementById('no').innerHTML = 'not enough clicks!';
        }
        else {
            gregg = true;
            clicks -= 1500;
            no.innerHTML = 'Successfully bought!';
            g2div.style.display = 'flex';
    document.body.style.backgroundImage = "url('https://www.greg.com/images/resized_and_crop/250/200/eyJpZCI6IjgzYWU3NjQ2YjljYWZkYjBiYjAzY2MwY2U2Y2E3NmVmIiwic3RvcmFnZSI6InN0b3JlIn0?signature=87f4495c39748e4459b4f3ad69f5843a9acc005e7b3baa33ccad7d6e47f198dd')";
    document.getElementById("clicksh1").style.color = '#ffff';
    document.getElementById("upgrades").style.color = '#ffff';
        }
    }

    else {
        no.innerHTML = 'already bought!';
    }
    clicksdisplay.innerHTML = "Clicks: " + clicks;
    localStorage.setItem('clicks', JSON.stringify(clicks));
    localStorage.setItem('gregg', gregg);
}

function display() {
    upgradesdiv.style.display = 'flex';
}

