function calculateScreenTime() {
  const instagram = Number(document.getElementById('instagram').value) || 0;
  const youtube = Number(document.getElementById('youtube').value) || 0;
  const gaming = Number(document.getElementById('gaming').value) || 0;
  const netflix = Number(document.getElementById('netflix').value) || 0;

  const totalPerDay = instagram + youtube + gaming + netflix;
  const yearlyHours = totalPerDay * 365;
  const daysLost = (yearlyHours / 24).toFixed(1);

  let roastMessage = "";
  let progressWidth = 0;
  let progressColor = "green";

  if (totalPerDay <= 2) {
    roastMessage = " Balanced lifestyle detected.";
    progressWidth = 25;
  } else if (totalPerDay <= 5) {
    roastMessage = " Your phone knows you pretty well.";
    progressWidth = 55;
    progressColor = "orange";
  } else {
    roastMessage = "You practically live inside your phone.";
    progressWidth = 90;
    progressColor = "red";
  }

  document.getElementById('totalHours').innerHTML =
    `⏰ Total Screen Time Per Day: <b>${totalPerDay} hrs</b>`;

  document.getElementById('yearlyHours').innerHTML =
    `📅 Yearly Screen Time: <b>${yearlyHours} hrs</b>`;

  document.getElementById('daysLost').innerHTML =
    `📉 Approx Days Lost Per Year: <b>${daysLost} days</b>`;

  document.getElementById('roast').innerHTML =
    `<b>${roastMessage}</b>`;

  const progressBar = document.getElementById('progressBar');
  progressBar.style.width = progressWidth + '%';
  progressBar.style.background = progressColor;
  progressBar.innerHTML = progressWidth + '% Addicted';

  document.getElementById('resultBox').style.display = 'block';
}

function resetFields() {
  document.getElementById('instagram').value = '';
  document.getElementById('youtube').value = '';
  document.getElementById('gaming').value = '';
  document.getElementById('netflix').value = '';

  document.getElementById('resultBox').style.display = 'none';
}
