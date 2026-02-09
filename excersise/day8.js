// first non repeat

const txt = "aabbccd";

const firstNonRepeating = (txt) => {
  const map = {};
  for (ch of txt) {
    map[ch] = (map[ch] || 0) + 1;
  }

  for (ch of txt) {
    if (map[ch] === 1) {
      return ch;
    }
  }

  return null;
};

console.log(firstNonRepeating(txt));
