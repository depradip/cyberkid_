const shareBtn = document.getElementById('shareBtn')

shareBtn.addEventListener('click', event => {

if (navigator.share) {
	
	navigator.share({
	text: 'Check the portfolio & CV: ',
	url: 'https://depradip.github.io/cyberkid_/'
  }).then(() => {
    console.log('Thank For Sharing..');
  })
    .catch((err) => console.error(err));
 } else {
	alert("The current browser doesn't support the share functionality. Please share manually.")
  }
 });