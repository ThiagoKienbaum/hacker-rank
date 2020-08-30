/*
    Task
    Complete the getLetter(s) function in the editor.
    It has one parameter: a string, s, consisting of lowercase English alphabetic letters (i.e., a through z).
    It must return A, B, C, or D depending on the following criteria:
        If the first character in string s is in the set {a,e,i,o,u}, then return A.
        If the first character in string s is in the set {b,c,d,f,g}, then return B.
        If the first character in string s is in the set {h,j,k,l,m}, then return C.
        If the first character in string s is in the set {n,p,q,r,s,t,u,v,w,x,y,z}, then return D.
    Hint: You can get the letter at some index i in s using the syntax s[i] or s.charAt(i).
*/

const s = 'adfgt';

function getLetter(s) {
    switch (s.charAt(0)) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return 'A';            
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            return 'B';            
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            return 'C';
        default:
            return 'D'        
    }   
}

console.log(getLetter(s));
