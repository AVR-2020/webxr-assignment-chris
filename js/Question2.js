AFRAME.registerComponent('over-list1', {
    schema:{
      mouseover:{type: 'boolean', default: false}
    },
    init: function () {
     
      var el = this.el;  // reference to the entity that contains this component    
      var data = this.data;  // reference to the properties of this component.    
      // Listen for mouseenter event
      this.el.addEventListener('mouseenter', function (evt) { 
        // You can't change the property directly. You must use setAttribute.
        el.setAttribute('over-list1','mouseover', true); // this.el fail, due to scope of the function. Must use this reference.
        // Change the color of the button to indicate rollover state is on.
         el.setAttribute('material','color','#55ee00');;
      });    
      // Listen for mouseleave event
      this.el.addEventListener('mouseleave', function (evt) {              
        el.setAttribute('over-list1','mouseover', false);   
         el.setAttribute('material','color','white');

         
      });    
    },
    update: function(){ // called every frame       

      if(this.data.mouseover){ // Check the mouseover state
        
  var pertanyaanObj = document.getElementById('pertanyaanText1');
  var answer1Obj = document.getElementById('answer1Text1');
  var answer2Obj = document.getElementById('answer2Text1');
  var answer3Obj = document.getElementById('answer3Text1');
  var answer4Obj = document.getElementById('answer4Text1');
  var question = [
      "What phenomenom is this?",
      "What planet in our solar system this phenomenom major belt exist?"
  ];
  var answerA = [
      "A. Blackhole",
      "A. Between Mars and Jupiter"
  ];
  var answerB = [
      "B. Asteroid",
      "B. Between Venus and Saturn"
  ];
  var answerC = [
      "C. Comet",
      "C. Between Mars and Earth"
  ];
  var answerD = [
      "D. Dark Matter",
      "C. Between Saturn and Neptunus"
  ];
        //console.log("asd")
        pertanyaanObj.setAttribute("value", question[1]);
        answer1Obj.setAttribute("value", answerA[1]);
        answer2Obj.setAttribute("value", answerB[1]);
        answer3Obj.setAttribute("value", answerC[1]);
        answer4Obj.setAttribute("value", answerD[1]);
        answer1Obj.setAttribute("color", "white");
        answer2Obj.setAttribute("color", "white");
        answer3Obj.setAttribute("color", "white");
        answer4Obj.setAttribute("color", "white");

        var RevealAnswer =[

        ]
    
        
        
    }
    else {

        var pertanyaanObj = document.getElementById('pertanyaanText1');
        var answer1Obj = document.getElementById('answer1Text1');
        var answer2Obj = document.getElementById('answer2Text1');
        var answer3Obj = document.getElementById('answer3Text1');
        var answer4Obj = document.getElementById('answer4Text1');

        pertanyaanObj.setAttribute("value", "Question");
        answer1Obj.setAttribute("value", "Choice 1");
        answer2Obj.setAttribute("value", "Choice 2");
        answer3Obj.setAttribute("value", "Choice 3");
        answer4Obj.setAttribute("value", "Choice 4");
        answer1Obj.setAttribute("color", "white");
        answer2Obj.setAttribute("color", "white");
        answer3Obj.setAttribute("color", "white");
        answer4Obj.setAttribute("color", "white");
    }
    }      
  });