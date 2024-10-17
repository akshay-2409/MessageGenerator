// Message Data
const adjectives = ['brilliant', 'amazing', 'resilient', 'courageous', 'fearless'];
const nouns = ['warrior', 'dreamer', 'innovator', 'explorer', 'creator'];
const quotes = [
  'Keep pushing forward, no matter what.',
  'Believe in your power.',
  'You are capable of incredible things.',
  'Today is the day to shine.',
  'Your potential is limitless.'
];

// Function to generate random message
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateMessage() {
  const adjective = getRandomElement(adjectives);
  const noun = getRandomElement(nouns);
  const quote = getRandomElement(quotes);
  
  return `You are a ${adjective} ${noun}. Remember: "${quote}"`;
}

// Output the message
console.log(generateMessage());
