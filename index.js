// code solution here

class President {
  constructor(name, politicalParty, yearsInOffice, homeState) {
    this.name = name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState;
  }

  veto() {
    return "NO!";
  }

  passBill() {
    return "You can do that!";
  }

  doCharity() {
    return "I like to help people.";
  }

  conductPressInterview() {
    return "I am proud to be an American.";
  }

  sayHi() {
    return "Hi, my name is "+ this.name + ". I am from " + this.homeState + ". I represent the " + this.politicalParty + "s, and was in office " + this.yearsInOffice + ".";
  }

}

var georgeWashington = new President("George Washington", "Republican", 10, "Virginia");

var abrahamLincoln = new President("Abraham Lincoln", "Republican", 10, "Virginia");

var richardNixon = new President("Richard Nixon", "Republican", 10, "Virginia");

var jimmyCarter = new President("Jimmy Carter", "Republican", 10, "Virginia");
