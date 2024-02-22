function playGame() {
    // Prompt the user for different types of words
    const noun1 = prompt("Enter a noun:");
    const verb = prompt("Enter a verb:");
    const adjective = prompt("Enter an adjective:");
    const noun2 = prompt("Enter another noun:");
  
    // Validate the user's inputs
    if (!noun1 || !verb || !adjective || !noun2) {
      alert("Please enter all the required words.");
      return;
    }
  
    // Create the story with the user's inputs
    const story = `Once upon a time, there was a ${noun1} who loved to ${verb} in the forest. One day, he saw a ${adjective} ${noun2} and decided to chase it.`;
  
    // Display the final story
    document.getElementById("story").innerText = story;
  }