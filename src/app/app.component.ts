import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lengthofpassword:number=0;
  hasNumber:boolean=false;
  hasLetter:boolean=false;
  hasSymbol:boolean=false;
  password:string="";

  onChangeLetters(){
    this.hasLetter=!this.hasLetter
  }

  onChangeNumbers(){
    this.hasNumber=!this.hasNumber
  }

  onChangeSymbols(){
    this.hasSymbol=!this.hasSymbol
  }

  lengthOfPassword(value:string){
    const parsedValue = parseInt(value);
    
    if(!isNaN(parsedValue)){
      this.lengthofpassword=parsedValue;
    }
  }

  generatePassword(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const symbol="!@#$^%&?()";
    const allNumber="0123456789";
    let randomString="";

    if(this.hasLetter){
      randomString+=alphabet;
    }
    if(this.hasNumber){
      randomString+=allNumber;
    }
    if(this.hasSymbol){
      randomString+=symbol;
    }

    let createdPassword="";
    for(let i=0;i<this.lengthofpassword;i++){
    
    const index=Math.floor(Math.random()*randomString.length);
    createdPassword+=randomString[index];
    } 
    this.password=createdPassword;
  }


}
