export function random(len: number){
    let option = "abcdefghijklmnopqrstuvxyz1234567890!@#$%^&*";
    let length = option.length;
    let ans = "";
    for(let i = 0; i < len; i++ ){
        ans += option[Math.floor((Math.random()*length))]
    }
    return ans;
}