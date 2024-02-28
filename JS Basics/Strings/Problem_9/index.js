function extractEmail(str) {
    const regex =  /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}/g; 
    return str.match(regex);
}

let text = "Test email1 email@example.com, Test email2 firstname.lastname@example.com, Test email3 1234567890@example.com, Test email4 _______@example.com, Test email5 email@example.co.jp";
extractEmail(text);
