import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {

  constructor() { }

    /////CAPTCHA CODE/////
    generateCaptcha(){
      var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9','!','@','#','$','%','&','*','+'];
      var a = alpha[Math.floor(Math.random()*70)];
      var b = alpha[Math.floor(Math.random()*70)];
      var c = alpha[Math.floor(Math.random()*70)];
      var d = alpha[Math.floor(Math.random()*70)];
      var e = alpha[Math.floor(Math.random()*70)];
      var f = alpha[Math.floor(Math.random()*70)];
  
      var final = a+b+c+d+e+f;
      var captcha = <HTMLInputElement>document.getElementById("catpcha");
      captcha.value = final;
    }
  
    checkCaptcha(){
      var captcha = <HTMLInputElement>document.getElementById("catpcha");
      var typedText = <HTMLInputElement>document.getElementById("textInput");
  
      //console.log("CAPTCHA: "+captcha.value+" VS INPUT: "+ typedText.value);
      if(typedText.value === captcha.value){
        return true
      }else{
        return false
      }
    }
    
}
