//Palindrome

function isPalindrome{
    function isPalindrome(word){
        let wordReversed=''

        for (let i=word.length-1,temp=0; i>=0;i--,temp++){
            wordReversed +=word[i]
        }
    }
    return wordReversed===word

}
    
