

// brise elementi i dodava novi, bez da ja smeni referencata
[].splice(startIndex,howManyToDelete, newItem, newItem2)

// kopira vo nova niza elementi
[].slice(start, kolkuElementiDaKopira) // bez parametri pravi kopija od nizata

// dodadi na kraj
[].push(novElement)

// odzemi na kraj
[].pop()

// dodadi na pocetok
[].unshift(novElement)
// odzemi na pocetok
[].shift()

// kreiraj string od elementi vo niza spoeni so separator
[].join(separator)

// golemina na niza
[].length

// proverka dali promenliva e niza
Array.isArray(promenliva)

// gi prevrtuva elementite (prviot e posleden, posledniot e prv)
[].reverse()

// naogja elemnt i go vraka dokolku e ednakov so toa shto se bara (prviot najden se vraka i prestanuva prebaruvanje)
[].find(stringOrFunction)

// ako go najde elementot  go vraka indeksot na koj shto se naoga
[].indexOf(elemeent)

// vrakja true dokolku go najde elementot
[].includes(element)

