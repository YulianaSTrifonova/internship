function extractPalindromes(str) {
    str = str.toLowerCase().split(" ");
    let palindromes =[];

    str.forEach(word => {
        if(word === word.split('').reverse().join('')) {
            palindromes.push(word);
        }
    })
    return palindromes;
}

const textArr = "Deified lorem ipsum dolor sit amet, consectetur adipiscing elit. Minim fusce fermentum luctus arcu id tempor. Kayak vestibulum ante ipsum primis exe in faucibus orci luctus et ultrices posuere cubilia curae solos; Praesent viverra vehicula libero, sed porta elit. Fusce venenatis lamal et mi aliquet convallis. Abba aecenas imperdiet ipsum in lorem auctor pretium sed vitae nulla."
extractPalindromes(textArr);
