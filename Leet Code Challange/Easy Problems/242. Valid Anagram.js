// hash table
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let map = new Map();

  for (let key of s) {
    map.set(key, map.get(key) + 1 || 1);
  }

  for (let key of t) {
    if (!map.get(key)) return false;

    map.set(key, map.get(key) - 1);
  }

  return true;
};

let s = "anagram",
  t = "nagaram",
  a = "rat",
  b = "car";

console.log(isAnagram(a, b));
