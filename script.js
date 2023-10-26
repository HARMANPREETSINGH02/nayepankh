if (name === '' || phone === '') {
    
    submissionMessageElement.innerHTML = 'Please enter your name and phone number.';
    submissionMessageElement.style.color = 'red';
    submissionMessageElement.style.display = 'block';
  } else {
    
    submissionMessageElement.innerHTML = `Thank you for registering, ${name}! Your phone number is ${phone}.`;
    submissionMessageElement.style.color = 'green';
    submissionMessageElement.style.display = 'block';
  }
  
