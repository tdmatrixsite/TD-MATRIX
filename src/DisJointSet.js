var DisJointSet=function()
{

    this.parent=[];

    this.rank=[];

    this.SetsHeaader=[];



  this.createset=function(sentenceIndex)
  {
    if(!this.parent[sentenceIndex])
    {
      this.parent[sentenceIndex]=sentenceIndex;
    }
  }

  this.getSetHeader=function(setIndex)
  {
    return this.SetsHeaader[setIndex];
  }

  this.AssignSetHeader=function(parentSetIndex,sentenceIndex,value)
  {
    if(typeof this.SetsHeaader[parentSetIndex]==undefined || value>this.SetsHeaader[parent])
    {
     this.SetsHeaader[parentSetIndex]=sentenceIndex;
    }
  }

  this.find=function(value)
  {
    if(!this.parent[value])
    {
      this.parent[value]=value;

      this.SetsHeaader[value]=value;

      return value;
    }
    else if(this.parent[value]==value)
    {
      return value;
    }
    else {
      var result= this.find(this.parent[value]);

      this.parent[value]=result;

      this.rank[result]-=1;

      return result;
    }
  }


  this.join=function(firstStatmentIndex,secondStatmentIndex)
  {
    var firstStatmentParent=this.find(firstStatmentIndex);

    var secondStatmentParent=this.find(secondStatmentIndex);

    var firstParentRank=this.rank[firstStatmentParent];

    var secondParentRank=this.rank[secondStatmentParent];

    var parentIndex=0;

    if((!IsDefined(firstParentRank) && !IsDefined(secondParentRank)) || firstParentRank==secondParentRank)
    {
        this.parent[secondStatmentIndex]=firstStatmentIndex;

        delete this.SetsHeaader[secondStatmentIndex];

        if(!IsDefined(this.rank[firstStatmentIndex]))
          {
            this.rank[firstStatmentIndex]=0;
          }
        this.rank[firstStatmentIndex]+=1;

        parentIndex=firstStatmentIndex;
    }
    else if(firstParentRank>secondParentRank || !IsDefined(secondParentRank)){

       this.parent[secondStatmentIndex]=firstStatmentIndex;

       delete this.SetsHeaader[secondStatmentIndex];

       parentIndex=firstStatmentIndex;
    }
    else if(secondParentRank>firstParentRank || !IsDefined(firstParentRank))
    {
      this.parent[firstStatmentIndex]=secondStatmentIndex;

      delete this.SetsHeaader[firstStatmentIndex];

      parentIndex=secondStatmentIndex;
    }

    return parentIndex;

  }
}
