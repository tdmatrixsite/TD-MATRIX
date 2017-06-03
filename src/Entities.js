
var Document=function()
{

    this.value="";

    this.terms={};

    //length af remving stop words and stemming terms
    this.length=0;

    this.isEndedProperly=null;


  this.getTermByIndex=function(targetIndex)
  {
    var counter=0;

    for(var index in this.terms)
    {
      if(counter++==targetIndex)
      {
        return this.terms[index];
      }
    }
  }
}


var Token=function()
{
    //Represent the original value of the term
    this.value="";

    //Represents the weight of the term in the term document matrix
    this.weight=0;

    this.documentFreq=null;

    this.stem=null;

    this.frequency=0;
}