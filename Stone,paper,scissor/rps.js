/**
 * Created by Keerat666 on 09-04-2017.
 */
var userchoice=0;
var h=0;
var w=0;
function rock ()
    {
        userchoice=1;
        game();
    }
function paper()
{
    userchoice=2;
    game();
}
function scissors()
{
    userchoice=3;
    game();
}
var cchoice=function() {
     var ce = Math.random();


    if (ce < 0.34) {
        ce = 1;
    } else if (ce <= 0.67) {
        ce = 2;
    }
    else {
        ce= 3;
    }
   return ce;

};



var compare=function(choice1 , choice2)
{

    if(choice1==choice2)
       return 0;
    else if (choice1==1)
    {
        if(choice2==3)
            return 1;
        else
            return 2;
    }
    else if (choice1==2)
    {
        if(choice2==1)
            return 1;
        else
            return 2;
    }
    else if (choice1==3)
    {
        if(choice2==1)
            return 2;
        else
            return 1;
    }

};

var game=function()
{
    var h=0;
    var w=0;

        if(w< 5 && h<5)
        {

            var names = ["Rock", "Paper", "Scissors"]
            cd = cchoice();
            var ans = compare(userchoice, cd);

            if (ans == 0)
                alert("Tie");
            if (ans == 1) {
               h++;

            }

            if (ans == 2) {

                w++;

            }



            if(h==1)
                {
                    //var a = parseInt(x);

                    alert("You won ! He gave a " + names[cd - 1]);
                }
            if(w==1)
            {
                //var b = parseInt(y);

                alert("Computer won , he choose " + names[cd - 1]);

            }
        }


    }

